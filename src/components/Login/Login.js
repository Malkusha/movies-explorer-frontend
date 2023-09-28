import LoginForm from '../LoginForm/LoginForm';
import './Login.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Login ({onLogin, requestError, setRequestError, errorText, isLoading}) {

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
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onChange={handleChange}
        formValue={formValue}
        isDisabled={!isValid}
        error={error}
        requestError={requestError}
        setRequestError={setRequestError}
        errorText={errorText}
      />
    </main>
  )
}

export default Login;