import './Header.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({isLoggedIn}) {

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
      {isLoggedIn ? (
        <>
          <nav>
            <ul className='header__film-menu header__menu'>
              <li><NavLink 
                className={(navData) => navData.isActive ? 
                  "header__link header__link_active" :
                  "header__link"}
                to="/movies">Фильмы</NavLink></li>
              <li><NavLink 
                className={(navData) => navData.isActive ? 
                  "header__link header__link_active" :
                  "header__link"}
                to="/saved-movies">Сохранённые фильмы</NavLink></li>
            </ul>
          </nav>
          <Link className='header__link header__link_account' to="/profile">Аккаунт</Link>
          {!isOpen && <button 
            className='header__button'
            onClick={handleOpen}
          />}
          {isOpen && <Navigation 
            onClose={handleClose}

          />}
        </>
         ) :
        (<nav>
          <ul className='header__log-menu header__menu'>
            <li className='header__menu-item header__menu-item_signup'>
              <NavLink className='header__link' to="/signup">Регистрация</NavLink>
            </li>
            <li className='header__menu-item header__menu-item_signin'>
              <NavLink className='header__link header__link_signin' to="/signin">Войти</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;