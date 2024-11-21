/* eslint-disable no-unused-vars */
import React from "react";
import profile from "../assets/image/dp.png";
import scroll from "../assets/image/scroll.png";
import { animate, motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 1,
    },
  },

  scrollButton: {
    y: [0, 10, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      delay: 2.5,
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const sliderVariants = {
  initial: {
    x: "100%",
    
  },
  animate: {
    x: ["-100%", "100%"],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const HeroSection = () => {
  return (
    <div className=" relative h-screen overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">

      <div className="h-full w-[75%] mx-auto " >

      <div className=" h-[100%]  ">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="h-[100%] space-y-8 relative z-10 flex flex-col justify-center "
        >
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-[2.5rem] text-[#583785] tracking-widest"
          >
            RAHUL MEHTA
          </motion.h2>

          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-[4rem] w-[70%] "
          >
            Web Developer & Mobile App Developer
          </motion.h1>

          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex items-center gap-x-8"
          >
            <motion.button
              variants={textVariants}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.05, 
                transition: { duration: 0.3 }, 
              }}
              whileTap={{
                scale:0.95
              }}
              className="border-2 font-extralight cursor-pointer  border-solid border-white p-2.5 rounded-md "
            >
              See the Latest Works
            </motion.button>

            <motion.button
              variants={textVariants}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.05, 
                transition: { duration: 0.3 }, 
              }}
              whileTap={{
                scale:0.95
              }}
              className="border-2 font-extralight cursor-pointer border-solid border-white p-2.5 rounded-md "
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img
            src={scroll}
            variants={textVariants}
            animate="scrollButton"
            alt="mouse"
            className="size-10"
          />

        </motion.div>

          <motion.h1
            variants={sliderVariants}
            animate="animate"
            initial="Initial"
            className="font-extrabold m-0 p-0  absolute -bottom-12 text-[#ffffff09] text-[10rem] whitespace-nowrap "
          >
            Be a Developer
          </motion.h1>
      </div>

      <div className="h-[100%] absolute top-0 right-0 ">
        <img
          src={profile}
          alt="Profile"
          className="w-[40rem] h-[40rem] object-cover"
        />
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
