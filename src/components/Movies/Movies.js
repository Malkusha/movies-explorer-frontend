import { useEffect, useState } from 'react';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {moviesApi} from '../../utils/MoviesApi';
import {
  filterShortMovies,
  filterSearchQueryMovies
} from '../../utils/utils';



function Movies({onMovieDelete, onMovieSave, savedMovies}) {

  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);


  function handleFilterMovies(movies, text, isShort) {
    localStorage.setItem('allMovies', JSON.stringify(movies));
    const moviesList = filterSearchQueryMovies(movies, text);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    setInitialMovies(moviesList);
    isShort ? setFilteredMovies(filterShortMovies(moviesList))
      : setFilteredMovies(moviesList)  
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
    localStorage.setItem('isShortMovies', !isShortMovies);
    if (!isShortMovies) {
      if (filterShortMovies(initialMovies).length === 0) {
        setIsNotFound(true);
      } else {
        setFilteredMovies(filterShortMovies(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
      setIsNotFound(false);
    }
  }

  function handleSearchMovies(searchText) {
    localStorage.setItem('searchQuery', searchText);
    localStorage.setItem('isShortMovies', isShortMovies);
    if (localStorage.getItem('allMovies')) {
      const allMovies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilterMovies(allMovies, searchText, isShortMovies);
      filteredMovies.length === 0 ?
        setIsNotFound(true) : setIsNotFound(false);

    } else {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((data) => {
          handleFilterMovies(data, searchText, isShortMovies);
          filteredMovies.length === 0 ?
            setIsNotFound(true) : setIsNotFound(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }

  useEffect(() => {
    localStorage.getItem('isShortMovies') === 'true' 
      ? setIsShortMovies(true) 
      : setIsShortMovies(false)
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      localStorage.getItem('isShortMovies') === 'true' 
        ? setFilteredMovies(filterShortMovies(movies)) 
        : setFilteredMovies(movies)
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('searchQuery')) {
      filteredMovies.length === 0 
        ? setIsNotFound(true)
        : setIsNotFound(false)
    } else setIsNotFound(false)  
  }, []);

  return (
    <main>
      <SearchForm
        onSearchMovies={handleSearchMovies} 
        isShortMovies={isShortMovies}
        onFilter={handleShortMovies}
        isLoading={isLoading}
        queryText={localStorage.getItem('searchQuery') ? 
          (localStorage.getItem('searchQuery')) :
          ''}
      />
      { isLoading ? 
        <Preloader /> :
        <MoviesCardList
          movies={filteredMovies}
          savedMovies={savedMovies}
          isNotFound={isNotFound}
          isRequestError={isRequestError}
          onMovieDelete={onMovieDelete}
          onMovieSave={onMovieSave}
        />}
    </main>
  )
}

export default Movies;