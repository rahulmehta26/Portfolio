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
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(1.5rem at 10% 5%)",
      transition: {
        delay: 0.5,
        stiffness:400,
        dumping: 40,
      },
    },
  };

  const textVariants = {
    open:{
        transition:{
            staggerChildren: 0.1,
        }
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1
        },
    },
  };

  const itemVariants = {
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        transition:{
            y: 50,
            opacity:0
        }
    },
  }

  return (
    <motion.div
      className="flex-col items-center justify-center bg-white text-black"
      animate={isToggle ? "open" : "closed"}
    >
      <motion.div
        className="fixed top-0 left-0 w-[22%] z-10 h-screen bg-white "
        variants={variants}
      >
        <motion.div variants={textVariants} className="relative flex flex-col w-full h-full text-black items-center justify-center">
          <XMarkIcon
            className="absolute top-4 left-4 h-6 w-6 cursor-pointer text-black"
            onClick={() => setIsToggle(false)}
          />

          {data?.map((item) => (
            <motion.a
            href={`#${item.title}`}
            key={item.id}
            variants={itemVariants}
            whileHover={{scale:1.1}}
            whileTap={{scale:.90}}
              className="text-2xl  cursor-pointer text-black font-semibold mt-10"
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        onClick={() => setIsToggle((prev) => !prev)}
       className= "w-10 h-10 cursor-pointer rounded-full z-20 fixed top-4 p-[.380rem] left-4 bg-white transition-all duration-300 "
      >
        <Bars3Icon className=" size-6 text-black " />
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
