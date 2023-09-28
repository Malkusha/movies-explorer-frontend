import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import Logo from '../Logo/Logo';
import { EMAIL_REGEXP } from '../../utils/constants';

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
  setRequestError, 
  errorText,
  isLoading
}) { 

  useEffect(() => {
    setRequestError(false);
  }, [])

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
            pattern={EMAIL_REGEXP}
            required
            value={formValue.email || ''}
            onChange={onChange}
            disabled={isLoading ? true : false}
        />
        <span className={isDisabled ? 'auth__error auth__error_active'
          : 'auth__error'}>{error.email}</span>
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
            disabled={isLoading ? true : false}
          />
          <span className={isDisabled ? 'auth__error auth__error_active'
          : 'auth__error'}>{error.password}</span>
      </form>
      <button 
        className={`auth__submit ${isDisabled ? `auth__submit_disabled` : ``}`} 
        form='form'
        type='submit'
        disabled={isDisabled || isLoading ? true : false}
      >{buttonText}</button>
      <span className='auth__redirect'>{redirectText}<Link className='auth__reg-link' to={link}>{linkText}</Link></span>
      <p className={`auth__request-error ${requestError ? `auth__request-error_active` : ``}`}>{errorText}</p>
    </section>
  )
}

export default LoginForm;