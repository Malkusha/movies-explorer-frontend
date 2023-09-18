import './Promo.css';

function Promo() {
  return (
    <>
      <section className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <ul className='promo__nav'>
          <li className='promo__nav-item'><a className='promo__link' href='/#about-project'>О проекте</a></li>
          <li className='promo__nav-item'><a className='promo__link' href='/#techs' smooth={true}>Технологии</a></li>
          <li className='promo__nav-item'><a className='promo__link' href='/#about-me' smooth={true}>Студент</a></li>
        </ul>
      </section>
    </>
  )
}

export default Promo;