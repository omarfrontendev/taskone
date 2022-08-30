import React from 'react'
import SectionHeader from '../../UI/SectionHeader'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'
import service4 from '../../images/service4.png'
import service5 from '../../images/service5.png'
import './Services.scss'

const Services = () => {

  const services = [
    {
      id: 1,
      img: service1
    },
    {
      id: 2,
      img: service2
    },
    {
      id: 3,
      img: service3
    },
    {
      id: 4,
      img: service4
    },
    {
      id: 5,
      img: service5
    },
  ]

  return (
    <div className='services__bgk'>
      <div className='services__section'>
        <div className="container">
          <div className="services__content d-flex">
            <div>
              <SectionHeader
                title='الخدمات والحلول'
                subtitle='نقدم خدمات وحلول احترافية في مجال الأمن السيبراني'
                titleColor='#201F1F'
                subtitleColor='#201F1F'
                maxWidth='auto'
              />
            </div>
            {services.map(s => (
              <div key={s.id}>
                <img src={s.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services