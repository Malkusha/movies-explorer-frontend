import  React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({onClose}) {

  return (
    <div className='nav'>
      <button
        className='nav__button'
        onClick={onClose}
      />
      <nav className='nav__menu-container'>
        <ul className='nav__menu menu'>
          <li>
              <NavLink 
                className={(navData) => navData.isActive ? 
                  "nav__link menu__link nav__link_active" :
                  "nav__link menu__link"}
                to="/" 
                onClick={onClose}>Главная
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(navData) => navData.isActive ? 
                "nav__link menu__link nav__link_active" :
                "nav__link menu__link"}
              to="/movies" 
              onClick={onClose}>Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(navData) => navData.isActive ? 
                "nav__link menu__link nav__link_active" :
                "nav__link menu__link"}
              to="/saved-movies" 
              onClick={onClose}>Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link 
          className='nav__link menu__link nav__link_account' 
          to="/profile" 
          onClick={onClose}>Аккаунт
        </Link>
    </nav>
    </div>
    
  )
}

export default Navigation;