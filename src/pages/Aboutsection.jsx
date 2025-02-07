/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    image: "/js.png",
  },
  {
    id: 2,
    name: "React",
    image: "/react.png",
  },
  {
    id: 3,
    name: "React Native",
    image: "/react.png",
  },
  {
    id: 4,
    name: "Tailwind",
    image: "/tailwind.png",
  },
  {
    id: 5,
    name: "HTML",
    image: "/html.png",
  },
  {
    id: 6,
    name: "CSS",
    image: "/css.png",
  },
  {
    id: 7,
    name: "Framer Motion",
    image: "/framer.png",
  },
  {
    id: 8,
    name: "GSAP",
    image: "/gsap.svg",
  },
  {
    id: 9,
    name: "Github",
    image: "/github.png",
  },
  {
    id: 10,
    name: "Bootstrap",
    image: "/bootstrap.png",
  },
];

const experiences = [
  {
    title: "React Native Developer Intern",
    company: "Apptunix",
    period: "February 2023 – August 2023",
    location: "Mohali, India",
    description: [
      "Developed and optimized cross-platform mobile applications using React Native, React Hooks, and Redux Toolkit, improving performance by 30%.",
      "Integrated third-party libraries, REST APIs, and Firebase Authentication to enhance functionality and security.",
      "Helped create new features and resolve bugs, leading to faster load times and improved app stability.",
    ],
  },
];

const Typewriter = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearInterval(interval); 
    } else {
      
      const timeout = setTimeout(() => {
        setIsTypingComplete(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.div
      className={className}
      style={{width:"100%", display: "inline", overflow: "hidden", whiteSpace: "normal", }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05, ease: [0.76, 0, 0.24, 1] }}
        style={{ display: "inline" }}
      >
        {displayedText}
      </motion.span>

      {!isTypingComplete && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: [0.76, 0, 0.24, 1] }}
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            backgroundColor: "currentColor",
            marginLeft: "2px",
            verticalAlign: "middle", 
            lineHeight: "1", 
          }}
        />
      )}
    </motion.div>
  );
};


const Aboutsection = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <h2 className="text-4xl font-bold mb-8 text-foreground">About Me</h2>
        <Typewriter
          text="Results-oriented Frontend Developer with knowledge of contemporary JavaScript frameworks, React, and React Native. A proven ability to develop scalable applications."
          className="text-lg max-w-2xl text-muted-foreground"
        />

        <h3 className="text-2xl font-bold mb-6 mt-4 text-foreground">Skills</h3>
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="bg-button-background cursor-pointer text-[#fff] px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <img
                src={skill?.image}
                alt={`${skill.name} logo`}
                className=" w-6 h-6 p-0.5 rounded-[2px] object-center object-cover "
              />
              {skill.name}
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6 text-foreground">Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="bg-[#0acf83] text-[#000] p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-bold">{exp.title}</h4>
              <p className="text-[#000000ce]">{exp.company}</p>
              <p className="text-[#000000ce] mb-4">
                {exp.period} | {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-card-foreground">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutsection;
