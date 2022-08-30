import React from 'react'
import SectionHeader from '../../UI/SectionHeader';
import Slider from "react-slick";
import client1 from '../../images/client1.png'
import client2 from '../../images/client2.png'
import client3 from '../../images/client3.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Clients.scss'

const Clients = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    className: 'client__carousel'
  };

  const DUMMY__DATA = [
    {
      id: 1,
      img: client1
    },
    {
      id: 2,
      img: client2
    },
    {
      id: 3,
      img: client3
    },
    {
      id: 4,
      img: client1
    },
    {
      id: 5,
      img: client2
    },
    {
      id: 6,
      img: client3
    },
    {
      id: 7,
      img: client1
    },
    {
      id: 8,
      img: client2
    },
  ]

  return (
    <section className='clients__section'>
      <div className="container">
        <SectionHeader 
          title='عمـلاؤنـا'
          titleColor='#0A0A0A'
        />
        <div className='client__slider'>
        <Slider {...settings}>
          {DUMMY__DATA.map(d => (
            <div key={d.id} className='single__client'>
              <img src={d.img} alt="" />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  )
}

export default Clients