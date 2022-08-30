import React, { useState } from 'react'
import { Logo } from '../../UI/icons'
import './Header.scss'

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className='d-flex align-items-center justify-content-between header__container'>
        <div className="logo">
          <Logo />
        </div>
        <button 
          className={`toggle__btn d-none justify-content-center flex-column ${open ? 'close' : ''}`}
          onClick={() => setOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`links d-flex align-items-center justify-content-between ${open ? 'open' : ''}`}>
          <li className='link'><a onClick={() => setOpen(false)} href="#">ترست لاين</a></li>
          <li className='link'><a onClick={() => setOpen(false)} href="#">لماذا ترست لاين؟</a></li>
          <li className='link'><a onClick={() => setOpen(false)} href="#">آلية العمل</a></li>
          <li className='link'><a onClick={() => setOpen(false)} href="#">تواصل معنا</a></li>
          <li className='link'>
            <div className="btns d-flex align-items-center">
              <button className='btn__login'>دخول</button>
              <button className='btn__lang'>ENG</button>
            </div>
          </li>
        </ul>
        <div className="btns d-flex align-items-center">
          <button className='btn__login'>دخول</button>
          <button className='btn__lang'>ENG</button>
        </div>
      </div>
    </div>
  )
}

export default Header