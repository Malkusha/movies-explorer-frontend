import './FilterCheckbox.css';

function FilterCheckbox() {
  return(
    <form className='filter-checkbox'>
      <input
        className='filter-checkbox__switch'
        type='checkbox'
        name='check-short'
      />
      <span className='filter-checkbox__text'>Короткометражки</span>
    </form>
  )
}

export default FilterCheckbox;