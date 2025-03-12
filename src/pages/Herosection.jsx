/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";

const AnimatedText = ({ text }) => {
  const splittedText = text.split("");

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: [-20, 0],
      opacity: [1, 0],
      transition: {
        duration: 2,
        ease: [0.76, 0, 0.24, 1],
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  };

  const duplicateVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: [0, 1],
      transition: {
        duration: 2,
        ease: [0.76, 0, 0.24, 1],
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="inline-block whitespace-normal relative"
    >
      {splittedText.map((char, i) => (
        <span key={i} className="relative inline-block">
          <motion.span variants={letterVariants} className="">
            {char}
          </motion.span>

          <motion.span
            variants={duplicateVariants}
            className="absolute top-0 left-0"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

const Herosection = () => {

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-full md:w-1/2 "
      >
        <h1 className=" text-3xl whitespace-nowrap space-y-4 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-popover-foreground mb-4">
          Hello,
          <br />
          I'm
          <br />
          Rahul <AnimatedText text="Mehta" />
        </h1>

        <div className="md:flex w-[60%] md:w-[60%] ">
          <CustomButton label="Download CV" downloadUrl="./RahulMehta.pdf" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-full flex justify-center md:justify-end "
      >
        <div className=" md:w-[40%] md:h-[100%] ">
          <img
            src="./avatar.png"
            alt="Profile"
            className="w-full h-full object-cover object-center "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Herosection;
