import { useEffect, useState } from 'react';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {
  filterShortMovies,
  filterSearchQueryMovies
} from '../../utils/utils';


function SavedMovies({onMovieDelete, onMovieSave, savedMovies}) {

  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);


  function handleFilterMovies(savedMovies, text, isShort) {
    const moviesList = filterSearchQueryMovies(savedMovies, text);
    setInitialMovies(moviesList);
    isShort ? setFilteredMovies(filterShortMovies(moviesList))
      : setFilteredMovies(moviesList)  
  }
  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
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
    if (SavedMovies) {
      handleFilterMovies(savedMovies, searchText, isShortMovies);
      filteredMovies.length === 0 ?
        setIsNotFound(true) : setIsNotFound(false);
    } else {
      setIsNotFound(true)
    }
  }

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [])

  return (
    <main>
      <SearchForm 
        onSearchMovies={handleSearchMovies} 
        isShortMovies={isShortMovies}
        onFilter={handleShortMovies}
        queryText={localStorage.getItem('searchQuerySaved') ? 
          (localStorage.getItem('searchQuerySaved')) :
          ''}
      />
      <MoviesCardList
        movies={filteredMovies}
        savedMovies={savedMovies}
        isNotFound={isNotFound}
        isRequestError={isRequestError}
        onMovieDelete={onMovieDelete}
        onMovieSave={onMovieSave}
      /> 
    </main>
  )
}

export default SavedMovies;