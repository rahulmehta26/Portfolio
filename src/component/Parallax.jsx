/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import mountain from '../assets/image/mountains.png'
import planets from '../assets/image/planets.png'
import stars from '../assets/image/stars.png'
import sun from '../assets/image/sun.png'
import {motion, useScroll, useTransform, useViewportScroll} from 'framer-motion'


const Parallax = ({ type }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"], 
      });
    
      const textTransform = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);
      const planetTransform = useTransform(scrollYProgress, [0, 10], ["0%", "450%"]);
      const starTransform = useTransform(scrollYProgress, [0, 8], ["0%", "450%"]);


  return (
    <div
    ref={ref}
      className={`${
        type !== "services"
          ? "bg-gradient-to-b from-[#111132]  to-[#0c0c1d]"
          : "bg-gradient-to-b from-[#111132] to-[#505064] "
      }
      h-full w-[100%] overflow-hidden relative flex items-center justify-center
      `}
    >
      <motion.h1 style={{y:textTransform}} className="text-[3.5rem]" >{type === "services" ? "What I do?" : "What I did?"}</motion.h1>
 
      <motion.div style={{
        backgroundImage: `url(${mountain})`,
        backgroundSize: 'cover',
        backgroundPosition:'center'
      }} 
      className="absolute z-30 top-0 left-0 w-[100%] h-screen "
      >
        
      </motion.div>
      <motion.div style={{
        backgroundImage: `url(${ type === 'services' ? sun : planets})`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        y:planetTransform,
      }} 
      className="absolute top-0 z-20 left-0 w-[100%] h-screen "
      ></motion.div>
      <motion.div style={{
        backgroundImage: `url(${stars})`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        x: starTransform
      }} 
      className="absolute top-0 z-10 left-0 w-[100%] h-screen "
      ></motion.div>
    </div>
  );
};

export default Parallax;
