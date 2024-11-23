/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { projectData } from "../utils/projectData";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({ info }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="h-screen w-full mt-24 ">
      <div className="flex gap-x-6 justify-center items-center">
        <div className="w-[50%] h-[25rem] flex-1 flex " ref={ref}>
          <img src={info?.img} className=" h-full w-full object-cover" />
        </div>

        <motion.div
          className="flex flex-col gap-10 flex-1"
          style={{ y: scrollY }}
        >
          <h2 className="text-[3rem]">{info?.title}</h2>

          <p className="text-gray-500 text-[1.rem]">{info?.desc}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 w-56 rounded-lg text-black text-lg bg-[#FFA500]"
          >
            See Link
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} className="relative w-[75%] mx-auto">
      <div className="sticky z-10  overflow-hidden top-0 left-0 pt-[2rem] text-[#FFA500]">
        <h1 className="text-[3rem] text-center font-bold ">Featured Works</h1>

        <motion.div style={{ scaleX }} className="h-4 relative z-10 bg-white  ">
        </motion.div>
      </div>

      {projectData?.map((item) => (
        <ProjectCard key={item.id} info={item} />
      ))}
    </div>
  );
};

export default Portfolio;
