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
  <div className='auth'>
    <div  className='auth__logo'>
      <Logo/>
    </div>
    <h2 className='auth__title'>{title}</h2>
    <form className='auth__form' id='auth-form'>
      {children}
      <label className='auth__label'>E-mail</label>
      <input
          className='auth__input'
          name='email'
          type='email'
          required
      />
      <label className='auth__label'>Пароль</label>
      <input 
          className='auth__input'
          name='password'
          type='password'
          required
        />
    </form>
    <button className={`auth__submit ${isDisabled ? `auth__submit_disabled` : ``}`} form='auth-form'>{buttonText}</button>
    <span className='auth__redirect'>{redirectText}<Link className='auth__reg-link' to={link}>{linkText}</Link></span>
  </div>
  )
}

export default Login;