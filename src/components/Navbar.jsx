/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "../utils/navItems";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuHovered, setMenuIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#000] rounded-b-[1.5rem] backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex relative items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverEnd={() => setIsHovered(false)}
              onHoverStart={() => setIsHovered(true)}
              className="w-10 h-10 relative overflow-hidden bg-[#fff] rounded-full flex items-center justify-center"
            >
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: isHovered ? "0%" : "100%",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className=" bg-background absolute inset-0 z-0 "
              />
              <p className=" text-[#000] font-bold text-xl z-10 ">R.</p>
            </motion.div>
          </Link>

          {isActive && (
            <div className=" absolute w-72 h-72 bg-[#0acf83] flex flex-col justify-center rounded-2xl p-4 top-0 right-0 space-y-6 ">
              <div className="flex flex-col justify-center items-center md:items-start mt-12 space-x-8">
                {navItems.map(({ to, label }, i) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIsActive(false) }
                    className="text-[#000] hover:text-[#fff] px-3 py-2 rounded-md text-lg font-bold transition duration-150 ease-in-out"
                  >
                    <motion.span
                      initial={{ y: 0, opacity: 0 }}
                      animate={{ y: -10, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 * i,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {label}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div
            className={`
              hidden md:block
              ${isActive ? " absolute right-2 " : " absolute right-0 "}`}
          >
            <motion.div
              onHoverStart={() => setMenuIsHovered(true)}
              onHoverEnd={() => setMenuIsHovered(false)}
              onClick={toggleMenu}
              className="bg-[#fff] overflow-hidden relative cursor-pointer rounded-full px-12 py-2 "
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: isMenuHovered ? "0%" : "100%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className=" bg-button-background absolute inset-0 z-0 "
              />

              {isActive ? (
                <AnimatedText isMenuHovered={isMenuHovered} label="Menu" />
              ) : (
                <AnimatedText isMenuHovered={isMenuHovered} label="Close" />
              )}
            </motion.div>
          </div>

          <div
            className={`md:hidden ${
              isActive ? " absolute right-2 " : " absolute right-0 "
            }`}
          >
            <motion.div
              onClick={toggleMenu}
              className="bg-[#fff] overflow-hidden flex justify-center items-center relative cursor-pointer rounded-full p-2.5 "
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: isActive ? "0%" : "100%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className=" bg-button-background absolute inset-0 z-0 "
              />

              {!isActive ? (
                <HiMenuAlt3
                  strokeWidth={1}
                  className=" w-6 h-6 text-black z-10 "
                />
              ) : (
                <RxCross2
                  strokeWidth={1}
                  className={
                    " w-6 h-6 z-10 " +
                    (isActive ? "text-[#fff] " : "text-[#000]")
                  }
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const AnimatedText = ({ isMenuHovered, label }) => {
  return (
    <div className=" flex flex-col justify-center items-center relative ">
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isMenuHovered ? "-150%" : "0%" }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="text-[#000] text-[1.15rem] font-medium relative z-10"
      >
        {label}
      </motion.div>

      <motion.div
        initial={{ y: "150%" }}
        animate={{ y: isMenuHovered ? "0%" : "150%" }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute text-[1.15rem] text-[#fff] font-medium z-10"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default Navbar;
