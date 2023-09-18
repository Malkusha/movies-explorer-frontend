import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({isLoading}) {
  return (
    <main>
      <SearchForm />
      { isLoading ? 
        <Preloader /> :
        <MoviesCardList />}
    </main>
  )
}

export default Movies;