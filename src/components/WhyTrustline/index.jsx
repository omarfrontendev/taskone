import React from 'react'
import SectionHeader from '../../UI/SectionHeader'
import why1 from '../../images/why1.png'
import why2 from '../../images/why2.png'
import why3 from '../../images/why3.png'
import why4 from '../../images/why4.png'
import  './WhyTrustline.scss'

const WhyTrustline = () => {
  return (
    <div className='container'>
      <section className="why__container section__space">
        <SectionHeader 
          titleColor='#FFFF'
          subtitleColor='#9B9B9B'
          title='لماذا ترست لاين؟'
          subtitle='نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى لرفع مستوى الأمن في جميع الكيانات والمؤسسات'
          maxWidth='696px'
        />
        <div className="why__Content d-flex">
          <div className="col__content d-flex flex-column">
            <div>
              <img src={why1} alt='' />
            </div>
            <div>
              <img src={why2} alt='' />
            </div>
          </div>
          <div className="col__content d-flex flex-column">
            <div>
              <img src={why3} alt='' />
            </div>
            <div>
              <img src={why4} alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyTrustline