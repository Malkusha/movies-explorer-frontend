import './Profile.css';

function Profile() {
  return(
    <section className='profile'>
      <h3 className='profile__title'>Привет, Анастасия!</h3>
      <form className='profile__form'>
          <input 
            className='profile__input profile__input_name' 
            placeholder='Имя'
            name="name"
            type='text'
            minLength="2"
            maxLength="40"
            required
          />
          <input 
            className='profile__input'
            placeholder='Email'
            name="email"
            type="email"
            required
          />
        <button 
          className='profile__button profile__button_save'
          type='submit'>Редактировать
        </button>
        <button className='profile__button profile__button_logout'>Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;