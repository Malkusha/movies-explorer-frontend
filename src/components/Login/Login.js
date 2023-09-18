import {Link} from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login ({
  title,
  children,
  link,
  redirectText,
  buttonText,
  linkText
}) {

  let isDisabled = false;

  return(
  <section className='auth'>
    <div  className='auth__logo'>
      <Logo/>
    </div>
    <h1 className='auth__title'>{title}</h1>
    <form className='auth__form' id='auth-form'>
      {children}
      <label className='auth__label'>E-mail</label>
      <input
          className='auth__input'
          placeholder='E-mail'
          name='email'
          type='email'
          required
      />
      <label className='auth__label'>Пароль</label>
      <input 
          className='auth__input'
          placeholder='Пароль'
          name='password'
          type='password'
          minLength="2"
				  maxLength="40"
          required
        />
    </form>
    <button 
      className={`auth__submit ${isDisabled ? `auth__submit_disabled` : ``}`} 
      form='auth-form'
      type='submit'
    >{buttonText}</button>
    <span className='auth__redirect'>{redirectText}<Link className='auth__reg-link' to={link}>{linkText}</Link></span>
  </section>
  )
}

export default Login;