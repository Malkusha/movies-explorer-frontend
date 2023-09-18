import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({isLoading}) {
  return (
    <main>
      <SearchForm />
      { isLoading ? 
        <Preloader /> :
        <MoviesCardList />}
    </main>
  )
}

export default SavedMovies;