import './Register.css';
import LoginForm from '../LoginForm/LoginForm';

import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register({onRegister, requestError, setRequestError, errorText, isLoading}) {

  const {
    formValue,
    error,
    isValid,
    handleChange} = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(formValue);
  }

  return (
    <main>
      <LoginForm 
        title='Добро пожаловать!'
        link='/signin'
        buttonText='Зарегистрироваться'
        redirectText='Уже зарегистрированы? '
        linkText='Войти'
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onChange={handleChange}
        formValue={formValue}
        error={error}
        isDisabled={!isValid}
        requestError={requestError}
        setRequestError={setRequestError}
        errorText={errorText}
      >
        <label className='auth__reg-label'>Имя</label>
        <input
          className='auth__reg-input'
          placeholder='Имя'
          name='name'
          type='text'
          minLength="2"
          maxLength="40"
          value={formValue.name || ''}
          required
          onChange={handleChange}
          disabled={isLoading ? true : false}
        />
        <span className={!isValid ? 'auth__error auth__error_active'
          : 'form__error'}>{error.name}</span>
      </LoginForm>
    </main>
  )
}

export default Register;