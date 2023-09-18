import { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {initialMovies} from '../../utils/movies.js';

function MoviesCardList() {

  const [MoviesOnPage, setMoviesOnPage] = useState(0)

  function showMoviesOnPage() {
    if (window.innerWidth >= 950) {
      setMoviesOnPage(12)
    }
    else if (window.innerWidth <= 480) {
      setMoviesOnPage(5)
    }
    else {
      setMoviesOnPage(8)
    }
  }

  useEffect(() => {
    showMoviesOnPage();
  }, []);

  function handleToggleIsSaved() {
    return (true)
    /* return false */
  }

  return(
    <section className='movies'>
      <ul className='movies__list'>
        {initialMovies.slice(0, MoviesOnPage).map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            isSaved={handleToggleIsSaved}
          />
        ))}
      </ul>
      <button className='movies__add-button' type='button'>Ещё</button>
    </section>
  )
}
export default MoviesCardList;