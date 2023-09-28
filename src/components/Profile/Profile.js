import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import InfoToolTip from '../InfoToolTip/InfoTooltip';
import Success from '../../images/Success.svg';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEXP } from '../../utils/constants';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Profile({
  onUpdateUser, 
  onLogout,
  isOpen,
  setIsSuccessToolTipOpen,
  requestError,
  setRequestError,
  errorText,
  isLoading
  }) {

  const currentUser = useContext(CurrentUserContext);
  const {
    formValue,
    error,
    isValid,
    handleChange,
    addFormValues} = useFormAndValidation();

  const [readOnly, setReadOnly] = useState(true);
  const [sameValue, setSameValue] = useState(true);

  function handleEdit() {
    setReadOnly(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(formValue);
  }

  useEffect(() => {
    {
      if (formValue.name === currentUser.name && formValue.email === currentUser.email) {
        setSameValue(true);
      } else {
        setSameValue(false)
      }
    }
  }, [formValue]) 

  useEffect(() => {
    if (currentUser) {
      addFormValues(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    setRequestError(false);
  }, [])


  return(
    <main className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' id='form' onSubmit={handleSubmit}>
          <div className='profile__input-container'>
          <label className='profile__label'>Имя</label>
            <input 
              className='profile__input profile__input_name' 
              placeholder='Имя'
              id='name'
              name='name'
              type='text'
              minLength="2"
              maxLength="40"
              required
              value={formValue.name || ''} 
              onChange={handleChange}
              readOnly={readOnly}
            />
            <span className={!isValid ? 'auth__error auth__error_active'
          : 'auth__error'}>{error.name}</span>
          </div>
          <div className='profile__input-container'>
          <label className='profile__label'>Email</label>
            <input 
              className='profile__input'
              placeholder='Email'
              id='email'
              name='email'
              type='email'
              pattern={EMAIL_REGEXP}
              required
              value={formValue.email || ''}
              onChange={handleChange}
              readOnly={readOnly}
              disabled={isLoading ? true : false}
            />
            <span className={!isValid ? 'auth__error auth__error_active'
          : 'auth__error'}>{error.email}</span>
          </div>
        {readOnly && <button 
          className='profile__button'
          type='button'
          onClick={handleEdit}
          >Редактировать
        </button>}
        {readOnly && <Link className='profile__logout' 
          href="/"
          onClick={onLogout}>Выйти из аккаунта
        </Link>}
        {!readOnly && <button 
          className={`profile__submit auth__submit ${!isValid || sameValue || isLoading ? `profile__submit_disabled` : ``}`} 
          form='form'
          type='submit'
          disabled={!isValid || sameValue ? true : false}
        >Сохранить</button>}
      </form>
      <p className={`auth__request-error ${requestError ? `auth__request-error_active` : ``}`}>{errorText}</p>
      <InfoToolTip
        popupName="success"
        title={<><p className="popup__text">Вы успешно</p><p className="popup__text">изменили данные</p></>} 
        isOpen={isOpen}
        toolTipImg={Success}
        onClose={() => {
          setIsSuccessToolTipOpen(false);
        }}
      />
    </main>
  )
}

export default Profile;