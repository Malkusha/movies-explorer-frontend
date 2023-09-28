import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import {WINDOW_WIDTH, MOVIES_ON_PAGE, MOVIES_ADD} from '../../utils/constants';

function MoviesCardList({
  movies, 
  isNotFound, 
  isRequestError,
  onMovieDelete,
  onMovieSave,
  savedMovies}) {

  const [moviesOnPage, setMoviesOnPage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const location = useLocation();

  function showMoviesOnPage() {
    if (window.innerWidth >= WINDOW_WIDTH.desktop) {
      setMoviesOnPage(MOVIES_ON_PAGE.desktop)
    }
    else if (window.innerWidth <= WINDOW_WIDTH.mobile) {
      setMoviesOnPage(MOVIES_ON_PAGE.mobile)
    }
    else {
      setMoviesOnPage(MOVIES_ON_PAGE.laptop)
    }
  }

  function handleShowMore() {
    if (window.innerWidth >= WINDOW_WIDTH.desktop) {
      setMoviesOnPage(moviesOnPage + MOVIES_ADD.desktop)
    } else {
      setMoviesOnPage(moviesOnPage + MOVIES_ADD.mobile)
    }
  }

  function checkIsSavedMovie(savedMovies, movie) {
      if (savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)) {
        return true;
      } else 
      return false;
  }

  useEffect(() => {
    showMoviesOnPage();
  }, [movies]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', showMoviesOnPage)
    }, 1000);
    return () => window.removeEventListener('resize', showMoviesOnPage)
  })

  return(
    <section className='movies'>
      { isRequestError && !isNotFound &&
        (<>
        <p className='movies__not-found'>Во время запроса произошла ошибка. 
          Возможно, проблема с соединением или сервер недоступен. 
          Подождите немного и попробуйте ещё раз</p>
      </>)
      }
      {isNotFound && !isRequestError && (
        <>
          <p className='movies__not-found'>Ничего не найдено</p>
        </>
      )}
      {!isNotFound && !isRequestError && (
        <>
          {location.pathname === '/saved-movies' ?
            (<>
            <ul className='movies__list'>  
                {movies.slice(0, moviesOnPage).map((movie) => (
                  <MoviesCard
                    movie={movie}
                    isSaved={true}
                    onMovieDelete={onMovieDelete}
                    onMovieSave={onMovieSave}
                    key={movie._id}
                    savedMovies={savedMovies}
                  />
            ))}
          </ul>
            </>) : (<>
              <ul className='movies__list'>  
                {movies.slice(0, moviesOnPage).map((movie) => (
                  <MoviesCard
                    movie={movie}
                    isSaved={checkIsSavedMovie(savedMovies, movie)}
                    onMovieDelete={onMovieDelete}
                    onMovieSave={onMovieSave}
                    key={isSaved ? movie._id : movie.id}
                    savedMovies={savedMovies}
                  />
            ))}
          </ul>
            </>)
          }
          { movies.length > 5 &&
            moviesOnPage < movies.length && (
              <button className='movies__add-button' type='button' onClick={handleShowMore}>Ещё</button>
            )
          }
        </>
      )}
    </section>
  )
}

export default MoviesCardList;