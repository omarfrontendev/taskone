import React from 'react'
import './SectionTitle.scss'

const SectionHeader = ({ title, subtitle, titleColor, subtitleColor, maxWidth }) => {
  return (
    <>
      <h2 
        className='section__title position-relative' 
        style={{color: `${titleColor}`}}
      >
        {title}
      </h2>
      {subtitle && <p 
        className='section__subtitle'
        style={{color: `${subtitleColor}`, maxWidth: `${maxWidth}`}}
      >
        {subtitle}
      </p>}
    </>
  )
}

export default SectionHeader