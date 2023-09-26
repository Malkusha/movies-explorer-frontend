import './FilterCheckbox.css';

function FilterCheckbox({isShortMovies, onFilter}) {

  return(
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__switch'
        type='checkbox'
        name='check-short'
        onChange={onFilter}
        checked={isShortMovies}
      />
      <span className='filter-checkbox__text'>Короткометражки</span>
    </label>
  )
}

export default FilterCheckbox;