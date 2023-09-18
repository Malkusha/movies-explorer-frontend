import './SearchForm.css';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search-form'>
          <input 
            className='search-form__input'
            placeholder='Фильм'
            required
          />
          <button 
            className='search-form__button'
            type='submit'
          />
      </form>
      <FilterCheckBox />  
    </div>
  )
}

export default SearchForm;