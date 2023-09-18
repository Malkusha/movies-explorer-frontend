import './Register.css';
import Login from '../Login/Login';

function Register({title}) {

  return (
    <main>
      <Login 
        title='Добро пожаловать!'
        link='/signin'
        buttonText='Зарегистрироваться'
        redirectText='Уже зарегистрированы? '
        linkText='Войти'
      >
        <label className='auth__reg-label'>Имя</label>
        <input
          className='auth__reg-input'
          placeholder='Имя'
          name='name'
          type='text'
          minLength="2"
          maxLength="40"
          required
        />
      </Login>
    </main>
  )
}

export default Register;