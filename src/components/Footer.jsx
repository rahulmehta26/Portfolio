/* eslint-disable no-unused-vars */
import React from "react";
import SocialSidebar from "./SocialSidebar";
import { Link } from "react-router-dom";
import { navItems } from "../utils/navItems";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="z-20 bg-[#000] rounded-t-[1.5rem] backdrop-blur-sm shadow-sm">
      <div className="  items-center flex flex-col justify-center flex-shrink-0 space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center max-w-7xl mx-auto px-4 sm:px-2 md:px-6 lg:px-8 py-4">
        <div>
          <h2 className=" text-white font-bold text-[1.4rem] ">Rahul Mehta</h2>

          <h3
          className=" text-[#fff] text-base "
          > Copyright &copy; 2025 </h3>
        </div>

        <div className="flex gap-4 ">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-[#fff] relative hover:text-[#000] hover:bg-button-background px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              {/* <motion.div 
              className=" bg- absolute "
              /> */}
              {label}
            </Link>
          ))}
        </div>

        <div
        className=" lg:hidden flex gap-4 "
        >
          <SocialSidebar />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
