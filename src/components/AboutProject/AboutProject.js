import './AboutProject.css';
import BlockTitle from '../BlockTitle/BlockTitle';

function AboutProject() {
  return (
    <>
      <section className='about-project' id='about-project'>
        <BlockTitle text='О проекте'/>
        <div className='about-project__info'>
          <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
          <h3 className='about-project__info-title about-project__info-title_second'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__info-item'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='about-project__info-item'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className='about-project__timing'>
          <p className='about-project__timing-info about-project__timing-info_type_green'>1 неделя</p>
          <p className='about-project__timing-info about-project__timing-info_type_grey'>4 недели</p>
          <p className='about-project__timing-info'>Back-end</p>
          <p className='about-project__timing-info'>Front-end</p>
        </div>
      </section>
    </>
  )
}

export default AboutProject;