import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({isLoading}) {
  return (
    <section>
      <SearchForm />
      { isLoading ? 
        <Preloader /> :
        <MoviesCardList />}
    </section>
  )
}

export default Movies;