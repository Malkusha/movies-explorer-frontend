import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  movie, 
  isSaved, 
  onMovieDelete, 
  onMovieSave, 
  savedMovies}) {

  const location = useLocation();
  
  function handleMovieClick() {
    isSaved 
      ? onMovieDelete(savedMovies.filter((m) => m.movieId === movie.movieId)[0])
      : onMovieSave(movie)
  }

  function convertDuration(duration) {
    let h = Math.trunc(duration / 60);
    let min = duration % 60;
    return ( h + 'ч ' + min + 'м')
  }

  return(
    <li className='movie'>
      <a className='movie__link' href={movie.trailerLink} target='_blank'>
        <img 
        className='movie__image' 
        src={location.pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} 
        alt={movie.nameRU}/>
      </a>
      {isSaved ? 
        (<>
          <div className='movie__icon movie__icon_type_saved' />
          {location.pathname === '/saved-movies' && <button 
            className='movie__button movie__button_type_delete'
            type='button'
            onClick={handleMovieClick}
            aria-label='Удалить из сохраненных'
          />}
        </>) :
        (<button 
        className='movie__button movie__button_type_save' 
        type='button'
        onClick={handleMovieClick}
        aria-label='Сохранить'>Сохранить</button>)}
      <div className='movie__info'>
        <h2 className='movie__title'>{movie.nameRU}</h2>
        <p className='movie__time'>{convertDuration(movie.duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;