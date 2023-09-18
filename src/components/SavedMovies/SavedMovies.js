import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section>
      <SearchForm />
      { isLoading ? 
        <Preloader /> :
        <MoviesCardList />}
    </section>
  )
}

export default SavedMovies;