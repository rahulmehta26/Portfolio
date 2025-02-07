/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomButton = ({ label, downloadUrl, onClick, type = "button" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick()
    }
  };

  return (
    <motion.a
      href={downloadUrl}
      download={downloadUrl ? true : undefined}
      onClick={handleClick}
      type={type}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "#a259ff" : "#000000",
      }}
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="border-[#000000] shadow-[-8px_10px_4px_rgba(0,0,0,1)] border-2 border-solid overflow-hidden flex flex-col justify-center items-center relative cursor-pointer px-8 py-3 rounded-full"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-0 bg-button-background z-0"
      />

      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isHovered ? "-150%" : "0%" }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="text-[#000] font-extrabold relative z-10"
      >
        {label}
      </motion.div>

      <motion.div
        initial={{ y: "150%" }}
        animate={{ y: isHovered ? "0%" : "150%" }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute text-[#fff] font-extrabold z-10"
      >
        {label}
      </motion.div>
    </motion.a>
  );
};

export default CustomButton;
