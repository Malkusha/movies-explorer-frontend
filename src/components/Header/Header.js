import './Header.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({isLoggedin}) {

  isLoggedin = true;

  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <header className='header'>
      <Logo />
      {isLoggedin ? (
        <>
          <ul className='film-menu menu'>
            <li><NavLink 
              className={(navData) => navData.isActive ? 
                "menu__link film-menu__link_active" :
                "menu__link"}
              to="/movies">Фильмы</NavLink></li>
            <li><NavLink 
              className={(navData) => navData.isActive ? 
                "menu__link film-menu__link_active" :
                "menu__link"}
              to="/saved-movies">Сохранённые фильмы</NavLink></li>
          </ul>
          <Link className='menu__link menu__link_account' to="/profile">Аккаунт</Link>
          {!isOpen && <button 
            className='header__button'
            onClick={handleOpen}
          />}
          {isOpen && <Navigation 
            onClose={handleClose}
          />}
        </>
         ) :
        (<ul className='log-menu menu'>
          <li className='log-menu__item log-menu__item_signup'>
            <NavLink className='menu__link' to="/signup">Регистрация</NavLink>
          </li>
          <li className='log-menu__item log-menu__item_signin'>
            <NavLink className='menu__link menu__link_signin' to="/signin">Войти</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;