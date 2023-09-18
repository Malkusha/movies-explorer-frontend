import './AboutMe.css';
import BlockTitle from '../BlockTitle/BlockTitle';
import photo from '../../images/Demo.png';

function AboutMe() {
  return(
    <section className='about-me' id='about-me'>
      <BlockTitle text='Студент'/>
      <div className="about-me__info">
        <h3 className="about-me__title">Анастасия</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 36 лет</p>
        <p className='about-me__text'>Здесь будет информация обо мне, я ее добавлю, как выполню основные пункты этапа 3</p>
        <a className='about-me__github' href='https://github.com/Malkusha' target="_blank">Github</a>
        <img className='about-me__photo' src={photo} alt='Фото Анастасии' />
      </div>  
    </section>
  )
}

export default AboutMe;