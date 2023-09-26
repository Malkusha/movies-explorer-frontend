import LoginForm from '../LoginForm/LoginForm';
import './Login.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Login ({onLogin, requestError, errorText}) {

  const {
    formValue,
    error,
    isValid,
    handleChange} = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(formValue);
  }

  return(
    <main>
      <LoginForm
        title='Рады видеть!'
        link='/signup'
        redirectText='Ещё не зарегистрированы? '
        buttonText='Войти'
        linkText='Регистрация'
        onSubmit={handleSubmit}
        onChange={handleChange}
        formValue={formValue}
        isDisabled={!isValid}
        error={error}
        requestError={requestError}
        errorText={errorText}
      />
    </main>
  )
}

export default Login;