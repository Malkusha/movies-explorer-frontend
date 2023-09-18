import './Profile.css';

function Profile() {

  return(
    <main className='profile'>
      <h1 className='profile__title'>Привет, Анастасия!</h1>
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
          className='profile__button'
          type='submit'>Редактировать
        </button>
        <a className='profile__logout' href="/">Выйти из аккаунта</a>
      </form>
    </main>
  )
}

export default Profile;