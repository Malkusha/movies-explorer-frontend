import './Register.css';
import Login from '../Login/Login';

function Register({title}) {

  return (
    <section>
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
          name='name'
          type='text'
          minLength="2"
          maxLength="40"
          required
        />
      </Login>
    </section>
  )
}

export default Register;