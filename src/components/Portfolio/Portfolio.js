import './Portfolio.css';

function Portfolio() {
  return (
    <>
      <section className='portfolio'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__links'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/Malkusha/how-to-learn/' target="_blank">
              Статичный сайт
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/Malkusha/russian-travel/' target="_blank">
              Адаптивный сайт
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/Malkusha/mesto/' target="_blank">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Portfolio;