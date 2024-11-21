/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import github from "../assets/image/github.png";
import linkedin from "../assets/image/linkedin.png";
import instagram from "../assets/image/instagram.png";

const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className=" w-full h-16 p-4">
      <SideBar />

      <div className="w-[75%] mx-auto flex justify-between items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 2 }}
            className="font-bold text-lg"
          >
            Rahul Mehta
          </motion.h1>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center gap-x-8"
        >
          <motion.a
            variants={childVariants}
            href="https://github.com/rahulmehta26"
            target="_blank"
          >
            <img src={github} className="socailIcons bg-white rounded-md" />
          </motion.a>

          <motion.a
            variants={childVariants}
            href="https://linkedin.com/in/rahulmehta26"
            target="_blank"
          >
            <img src={linkedin} className="socailIcons" />
          </motion.a>

          <motion.img
            variants={childVariants}
            src={instagram}
            className="socailIcons"
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
