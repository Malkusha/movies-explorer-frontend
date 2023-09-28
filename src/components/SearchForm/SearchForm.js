import { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';


function SearchForm({
  isLoading,
  onSearchMovies, 
  isShortMovies, 
  onFilter, 
  queryText,
}) {

  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState('');

  function handleChangeSearchText(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchText) {
      setError(false);
      onSearchMovies(searchText);
    } else
      {setError(true);}
    setSearchText(searchText);
  }

  useEffect(() => {
    setSearchText(queryText);
  }, [])

  return (
    <section className='search'>
      <form className='search-form'
        onSubmit={handleSubmit}
        >
          <input 
            className='search-form__input'
            placeholder='Фильм'
            onChange={handleChangeSearchText}
            value={searchText}
            type='text'
            id='search'
            name='search'
            disabled={isLoading ? true : false}
          />
          <button 
            className='search-form__button'
            type='submit'
          />
          <FilterCheckBox 
            isShortMovies={isShortMovies}
            onFilter={onFilter}
            isLoading={isLoading}
          />
      </form>
      {error && <p className='search-form__error'>Нужно ввести ключевое слово</p>}    
    </section>
  )
}

export default SearchForm;