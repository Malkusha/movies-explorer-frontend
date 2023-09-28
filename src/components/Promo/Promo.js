import './Promo.css';

function Promo() {
  return (
    <>
      <section className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <nav>
          <ul className='promo__nav'>
            <li className='promo__nav-item'><a className='promo__link' href='/#about-project'>О проекте</a></li>
            <li className='promo__nav-item'><a className='promo__link' href='/#techs'>Технологии</a></li>
            <li className='promo__nav-item'><a className='promo__link' href='/#about-me'>Студент</a></li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Promo;