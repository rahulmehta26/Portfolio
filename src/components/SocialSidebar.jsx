/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/rahulmehta26", label: "Github" },
  { Icon: BsLinkedin, href: "www.linkedin.com/in/rahulmehta26", label: "LinkedIn" },
  { Icon: MdEmail, href: "#", label: "Gmail" },
];

const SocialSidebar = ({className}) => {
  return (
    <>
      {socialLinks.map(({ Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-8 h-8 md:w-10 md:h-10 bg-[#fff] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300 ${className} `}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
        </motion.a>
      ))}
    </>
  );
};

export default SocialSidebar;
