import React from 'react'
import overlay from '../../images/DPpkhkoWsAAp5HZ 1.png'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='overlay'>
        <img src={overlay} alt='overlay' />
      </div>
      <div className="container">
        <div className="hero__content d-flex flex-column align-items-center justify-content-center">
          <h1 className='hero__title'>ترست لاين تقدم لأعمالك الحماية</h1>
          <p className='hero__subtitle'>ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات وحلول الأمن السيبراني.</p>
          <button className='hero__btn'>تواصل معنا</button>
        </div>
      </div>
    </div>
  )
}

export default Hero