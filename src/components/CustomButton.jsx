import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomButton = ({ label, downloadUrl, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonElement = downloadUrl ? (
    <motion.a
      href={downloadUrl}
      download="Rahul_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "#a259ff" : "#000000",
      }}
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="border-[#000000] shadow-[-8px_10px_4px_rgba(0,0,0,1)] border-2 border-solid overflow-hidden flex flex-col justify-center items-center relative cursor-pointer px-8 py-3 rounded-full w-full"
    >
      <ButtonContent isHovered={isHovered} label={label} />
    </motion.a>
  ) : (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "#a259ff" : "#000000",
      }}
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="border-[#000000] shadow-[-8px_10px_4px_rgba(0,0,0,1)] border-2 border-solid overflow-hidden flex flex-col justify-center items-center relative cursor-pointer px-8 py-3 rounded-full w-full"
    >
      <ButtonContent isHovered={isHovered} label={label} />
    </motion.div>
  );

  return buttonElement;
};

const ButtonContent = ({ isHovered, label }) => (
  <>
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
  </>
);

export default CustomButton;
