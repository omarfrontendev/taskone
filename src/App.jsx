import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import WhyTrustline from './components/WhyTrustline';
import Services from './components/Services';
import Team from './components/Team';
import Clients from './components/Clients';
import News from './components/News';

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.styles.scss";
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyTrustline />
      <Services />
      <Team />
      <Clients />
      <News />
      <Footer />
    </>
  )
}