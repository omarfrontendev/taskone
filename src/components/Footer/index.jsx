/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LinkedIn, Logo, Twitter } from '../../UI/icons'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__content d-flex align-items-start justify-content-between">
          <div className="rigth">
            <div className="footer__brand">
              <Logo />
            </div>
            <p className='text__copy__rigth'>واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564</p>
            <p className='text__copy__rigth'>Trustline - جميع الحقوق محفوظة 2022</p>
          </div>
          <ul className="center d-flex flex-column">
            <li><a href='#' target='__blank'>للشركات</a></li>
            <li><a href='#' target='__blank'>للباحثين</a></li>
            <li><a href='#' target='__blank'>بيانات التواصل</a></li>
            <li><a href='#' target='__blank'>تواصل معنا</a></li>
          </ul>
          <div className="left d-flex align-items-center justify-content-end">
            <LinkedIn />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer