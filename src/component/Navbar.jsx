/* eslint-disable no-unused-vars */
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import Images from '../constant/image';
import {motion} from 'framer-motion'
import SideBar from './SideBar';
import github from '../assets/image/github.png'
import linkedin from '../assets/image/linkedin.png'
import instagram from '../assets/image/instagram.png'


const Navbar = () => {
  return (

    <nav className=' w-full h-16 p-4' >

      <SideBar />

      <div className='w-[75%] mx-auto flex justify-between items-center' >

        <div>
            
            <motion.h1 
            initial = {{opacity : 0, scale:0.5}}
            animate = {{opacity:1, scale:1.5}}
            transition={{duration:2}}
            className='font-bold text-lg'>Rahul Mehta</motion.h1>

        </div>

        <div className='flex justify-between items-center gap-x-4' >
            
            <img src={github} className='socailIcons bg-white rounded-md' />

            <img src={linkedin} className='socailIcons' />

            <img src={instagram} className='socailIcons' />

        </div>

      </div>

    </nav>

  );
};

export default Navbar;