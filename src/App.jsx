/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css'
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Parallax from './component/Parallax';

const App = () => {
  
  return (
    <div>
      <section id='Home' className='flex-col flex h-screen '  >
        <Navbar />
        <HeroSection />
        </section>
      <section id='Services'className=' h-screen ' ><Parallax type = "services" /></section>
      <section className=' h-screen '>Services</section>
      <section id = 'Portfolio' className=' h-screen ' ><Parallax type = "portfolio" /></section>
      <section className=' h-screen '>Portfolio1</section>
      <section className=' h-screen '>Portfolio2</section>
      <section className=' h-screen '>Portfolio3</section>
      <section id='Contact' className=' h-screen '>Contact</section>
    </div>
  );
};

export default App;