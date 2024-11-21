/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { delay, motion, stagger } from "framer-motion";
import { clipPath } from "framer-motion/m";

const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const data = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Services",
    },
    {
      id: 3,
      title: "Portfolio",
    },
    {
      id: 4,
      title: "Contact",
    },
    {
      id: 5,
      title: "About",
    },
  ];

  const variants = {
    open: {
      clipPath: "circle(1200px at 10% 5%)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(1.5rem at 10% 5%)",
      transition: {
        delay: 0.5,
        type:'spring',
        duration:0.4,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const textVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      transition: {
        y: 50,
        opacity: 0,
      },
    },
  };

  return (
    <motion.div
      className="flex-col items-center justify-center bg-white text-black"
      animate={isToggle ? "open" : "closed"}
    >
      <motion.div
        className={`fixed top-0 left-0 w-[22%] z-[30] h-screen bg-white ${
          isToggle ? "block" : "hidden"
        }`}
        variants={variants}
      >
        <motion.div
          variants={textVariants}
          className="relative flex flex-col w-full h-full text-black items-center justify-center"
        >
          <motion.div
            className="absolute top-4 left-4 h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer z-[40]" // Positioned the XMarkIcon
            onClick={() => setIsToggle(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </motion.div>

          {data?.map((item) => (
            <motion.a
              href={`#${item.title}`}
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl  cursor-pointer text-black font-semibold mt-10"
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        onClick={() => setIsToggle((prev) => !prev)} 
        className="w-10 h-10 cursor-pointer rounded-full z-[50] fixed top-4 left-4 flex items-center justify-center bg-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isToggle ? (
          <XMarkIcon className="h-6 w-6 text-black" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-black" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
