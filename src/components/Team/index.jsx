import React from 'react'
import SectionHeader from '../../UI/SectionHeader'
import team1 from '../../images/team1.png'
import team2 from '../../images/team2.png'
import './Team.scss'

const Team = () => {
  return (
    <section className='team__section'> 
      <div className='container'>
        <div className="team__content d-flex align-items-center justify-content-start">
          <div className="team__images d-flex align-items-center">
            <img src={team1} alt="team__image" />
            <img src={team2} alt="team__image" />
          </div>
          <div className='team__text d-flex flex-column'>
            <SectionHeader
              title='فريقـنا'
              titleColor='#4F4F4F'
            />
            <p className='team__text__p'>في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات قادمة.</p>
            <p className='team__text__p'>يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team