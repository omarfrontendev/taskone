import React from 'react'
import './SingleNew.scss'

const SingleNews = ({ img, title, desc }) => {
  return (
    <div className='d-flex align-items-center justify-content-start single__new'>
      <div className='new__image'>
        <img src={img} alt="" />
      </div>
      <div className='new__text'>
        <h3 className='new__title'>{title}</h3>
        <p className='new__desc'>{desc}</p>
        <button className='text__btn'>اقرأ المقال ←</button>
      </div>
    </div>
  )
}

export default SingleNews