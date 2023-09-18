import './FilterCheckbox.css';

function FilterCheckbox() {
  return(
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__switch'
        type='checkbox'
        name='check-short'
      />
      <span className='filter-checkbox__text'>Короткометражки</span>
    </label>
  )
}

export default FilterCheckbox;