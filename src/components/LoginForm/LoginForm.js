import { Link } from 'react-router-dom';
import './LoginForm.css';
import Logo from '../Logo/Logo';

function LoginForm ({
  title,
  children,
  link,
  redirectText,
  buttonText,
  linkText,
  onSubmit,
  onChange, 
  formValue,
  error,
  isDisabled,
  requestError, 
  errorText
}) {  

  return(
    <section className='auth'>
      <div  className='auth__logo'>
        <Logo/>
      </div>
      <h1 className='auth__title'>{title}</h1>
      <form className='auth__form' 
        id='form'
        action='submit'
        onSubmit={onSubmit}
        noValidate
        >
        {children}
        <label className='auth__label'>E-mail</label>
        <input
            className='auth__input'
            placeholder='E-mail'
            name='email'
            type='email'
            required
            value={formValue.email || ''}
            onChange={onChange}
        />
        <span className={isDisabled ? 'auth__error auth__error_active'
          : 'form__error'}>{error.email}</span>
        <label className='auth__label'>Пароль</label>
        <input 
            className='auth__input'
            placeholder='Пароль'
            name='password'
            type='password'
            minLength="2"
            maxLength="40"
            required
            value={formValue.password || ''}
            onChange={onChange}   
          />
          <span className={isDisabled ? 'auth__error auth__error_active'
          : 'form__error'}>{error.password}</span>
      </form>
      <button 
        className={`auth__submit ${isDisabled ? `auth__submit_disabled` : ``}`} 
        form='form'
        type='submit'
        disabled={isDisabled ? true : false}
      >{buttonText}</button>
      <span className='auth__redirect'>{redirectText}<Link className='auth__reg-link' to={link}>{linkText}</Link></span>
      <p className={`auth__request-error ${requestError ? `auth__request-error_active` : ``}`}>{errorText}</p>
    </section>
  )
}

export default LoginForm;