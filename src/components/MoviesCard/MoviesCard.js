import './MoviesCard.css';

function MoviesCard({movie, isSaved, onClick}) {

  function convertDuration(duration) {
    let h = Math.trunc(duration / 60);
    let min = duration % 60;
    return ( h + 'ч ' + min + 'м')
  }

  return(
    <li className='movie'>
      <a className='movie__link' href={movie.trailerLink }>
        <img className='movie__image' src={movie.thumbnail} alt={movie.nameRu}/>
      </a>
      {isSaved ? 
        (<>
          <div className='movie__icon movie__icon_type_saved' />
          <button className='movie__button movie__button_type_delete'/>
        </>) :
        (<button className='movie__button movie__button_type_save' onClick={onClick}>Сохранить</button>)}
      <div className='movie__info'>
        <h2 className='movie__title'>{movie.nameRu}</h2>
        <p className='movie__time'>{convertDuration(movie.duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;