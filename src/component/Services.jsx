/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import titleImg from "../assets/image/titleImg.jpg";
import {cardData} from '../utils/cardData'

const Services = () => {

  const ref = useRef();

  const scrollView = useInView(ref,{margin:'-150px'});

  const variants = {
    initial:{
      x:-500,
      y:100,
      opacity: 0
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:2,
        staggerChildren: 1
      }
    },
  }

  return (

    <div
    className="bg-gradient-to-b h-full from-[#0c0c1d] to-[#111132] "
    >

    
    <motion.div 
    ref={ref} 
    variants={variants}
    initial = 'initial'
    animate = {scrollView && 'animate'}
    className=" h-full flex flex-col justify-between ">
      <motion.div 
      variants={variants}
      className="self-end mt-4 flex gap-x-4 items-center " >
        <p
        className="font-thin text-[1.25rem] text-right "
        >
          I focus on improving my knowledge, <br />
          growing, and moving forward.
        </p>

        <hr className="w-[24rem] border-top border-white/50 border-solid" />
      </motion.div>

      <motion.div
      variants={variants}
      className="flex flex-col space-y-2 items-center"
      >
        <div className="flex gap-x-6 items-center" >
          <img
            src={titleImg}
            alt="title"
            className="h-20 w-72 rounded-full object-cover "
          />

          <h1 className="text-[3rem] font-[100] " >
            <motion.b whileHover={{color:'#FFA500'}} className="font-[1000]" >Innovative</motion.b> Ideas
          </h1>

        </div>

          <div className="flex items-center gap-x-6 " >
            <h1 className="text-[3rem] font-[100] ">
              <motion.b whileHover={{color:'#FFA500'}} className="font-[1000]" >Empowering Your</motion.b> Business.
            </h1>
            <motion.button 
            whileHover={{
              scale: 1.05, 
              transition: { duration: 0.3 }, 
            }}
            whileTap={{
              scale:0.95
            }}
            className="p-6 px-16 text-black text-lg bg-[#FFA500] rounded-full " >Let’s Collaborate</motion.button>
          </div>
      </motion.div>

      <motion.div 
      variants={variants}
      className="flex w-[75%] mx-auto" >

        {
          cardData?.map((info) => (

        <motion.div
        whileHover={{background:"lightgray", color:'black', border:'none'}}
        key={info.id}
        className="flex space-y-10 flex-col justify-between p-3 border-[.1rem] border-gray-800 border-solid "
        >
          <h2 className="text-center font-bold " >{info.title}</h2>
          <p>
            {
              info.description
            }
          </p>
          <motion.button 
          whileHover={{
            scale: 1.05, 
            transition: { duration: 0.3 }, 
          }}
          whileTap={{
            scale:0.95
          }}
          className="bg-[#FFA500] p-3 rounded-full "
          >Go</motion.button>
        </motion.div>

           ) )
        }



      </motion.div>

    </motion.div>

    </div>
  );
};

export default Services;
