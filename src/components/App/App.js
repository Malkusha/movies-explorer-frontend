import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

function App() {

  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);

  function setHeader() {
    if ( location.pathname === "/" ) {
      setIsLoggedin(false);
    }
    else {
      setIsLoggedin(true)
    }
  }

  useEffect(() => {
    setHeader();
  })

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      {(location.pathname === "/" || 
          location.pathname === "/movies" || 
          location.pathname === "/saved-movies" ||
          location.pathname === "/profile") && 
          <Header
            isLoggedin={isLoggedin}
          />}
        <Routes>
          <Route
            path="/"
            element={<Main/>}
          />
          <Route 
          path="/movies"
          element={<Movies/>}
          />
          <Route 
          path="/saved-movies"
          element={<SavedMovies/>}
          />
          <Route 
              path="/signup" 
              element={<Register
              />}
          /> 
          <Route 
              path="/signin" 
              element={<Login 
                title='Рады видеть!'
                link='/signup'
                redirectText='Ещё не зарегистрированы? '
                buttonText='Войти'
                linkText='Регистрация'
              />}
          />
          <Route 
              path="/profile" 
              element={<Profile />}
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
