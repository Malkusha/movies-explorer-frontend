import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { 
  ERROR_LOGIN_NO_TOKEN,
  ERROR_lOGIN_WRONG_DATA,
  ERROR_LOGIN_WRONG_TOKEN,
  ERROR_REG_EMAIL_EXIST,
  ERROR_REG,
  ERROR_UPDATE_EMAIL_EXIST,
  ERROR_UPDATE} from '../../utils/constants';

import * as mainApi from '../../utils/MainApi';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSuccessToolTipOpen, setIsSuccessToolTipOpen] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [errorText, setErrorText] = useState('');

  function handleSuccessToolTip() {
    setIsSuccessToolTipOpen(true);
  }

  const location = useLocation();
  const navigate = useNavigate();

  
  function checkToken() {
    const token = localStorage.getItem("token");
    if ( token ) {
      mainApi.getContent(token)
      .then((data) => {
        if (!data) {
          return;
        }
        localStorage.removeItem('allMovies');
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsLoggedIn(false);
      });
    }
  }

  useEffect(() => {
    setRequestError(false);
  }, [])

  useEffect(() => {
    checkToken();
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getProfileInfo()
      .then(({name, email, _id}) => {
        setCurrentUser({name, email, _id});
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
    }   
  }, [isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getSavedMovies()
      .then((data) => setSavedMovies(data))
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
    }  
  }, [isLoggedIn])

  function handleRegister({name, email, password}) {
    mainApi.register(name, email, password)
      .then(() => {
        handleAuthorize({email, password})
        setRequestError(false);
      })
      .catch((err) => {
        setRequestError(true);
        err === 'Ошибка: 409'
          ? setErrorText(ERROR_REG_EMAIL_EXIST)
          : setErrorText(ERROR_REG)
      })
  }

  function handleAuthorize({email, password}) {
    mainApi.authorize(email, password)
      .then((data) => {
          localStorage.setItem("token", data.token);
          setRequestError(false);
          setIsLoggedIn(true);
          navigate("/movies", {replace: true});
        })
      .catch((err) => {
        setRequestError(true);
        err === 'Ошибка: 401' 
          ? setErrorText(ERROR_lOGIN_WRONG_DATA)
          : setErrorText(ERROR_LOGIN_WRONG_TOKEN); 
        console.log(err);
      });
  }

  function handleUpdateUser({name, email}) {
    mainApi.setProfileInfo({name, email})
    .then((data) => {
      setCurrentUser(data.data);
      handleSuccessToolTip();
    })
    .catch((err) => {
      setRequestError(true);
      err === 'Ошибка: 409'
        ? setErrorText(ERROR_UPDATE_EMAIL_EXIST)
        : setErrorText(ERROR_UPDATE); 
      console.log(err)
    });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/signin');
  }

  function handleSaveMovie(newMovie) {
    mainApi.SaveMovie(newMovie)
      .then((newMovie) => setSavedMovies([newMovie.data, ...savedMovies]))
      .then(localStorage.setItem('savedMovies', JSON.stringify(savedMovies)))
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      }); 
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(setSavedMovies(
        savedMovies.filter(item => item._id !== movie._id)
      ))
      .then(localStorage.setItem('savedMovies', JSON.stringify(savedMovies)))
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      {(location.pathname === "/" || 
          location.pathname === "/movies" || 
          location.pathname === "/saved-movies" ||
          location.pathname === "/profile") && 
          <Header
            isLoggedIn={isLoggedIn}
          />}
        <Routes>
          <Route
            path="/"
            element={<Main/>}
          />
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              onMovieDelete={handleDeleteMovie}
              onMovieSave={handleSaveMovie}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              onMovieDelete={handleDeleteMovie}
              onMovieSave={handleSaveMovie}
              savedMovies={savedMovies}
            />
          }/>
          <Route path="/profile" element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Profile}
              onUpdateUser={handleUpdateUser}
              onLogout={handleLogout}
              isOpen={isSuccessToolTipOpen}
              setIsSuccessToolTipOpen={setIsSuccessToolTipOpen}
              requestError={requestError}
              errorText={errorText}
            />
          }
          />
          <Route 
              path="/signup" 
              element={<Register
                onRegister={handleRegister}
                requestError={requestError}
                errorText={errorText}
              />}
          /> 
          <Route 
              path="/signin" 
              element={<Login 
                onLogin={handleAuthorize}
                requestError={requestError}
                errorText={errorText}
              />}
          />
          <Route
            path="/*" 
            element={<NotFound />} 
          />
        </Routes>
        {(location.pathname === "/" || 
          location.pathname === "/movies" || 
          location.pathname === "/saved-movies") && <Footer/>}
      </div>
    </CurrentUserContext.Provider> 
  );
}

export default App;
