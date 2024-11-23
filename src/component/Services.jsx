/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { animate, motion, useInView, useScroll } from "framer-motion";
import titleImg from "../assets/image/titleImg.jpg";
import { cardData } from "../utils/cardData";

const Services = () => {
  const ref = useRef();

  const scrollView = useInView(ref, { margin: "-150px" });

  const staggerText = "Innovative";

  const staggerTexts = "Empowering Your";

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 1,
      },
    },
  };

  const rightVariants = {
    initial: {
      x: 1100,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "linear",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b h-full from-[#0c0c1d] to-[#111132] ">
      <motion.div
        ref={ref}
        initial="initial"
        animate={scrollView && "animate"}
        className=" h-full overflow-hidden flex flex-col justify-between "
      >
        <motion.div
          variants={rightVariants}
          initial="initial"
          animate={scrollView && "animate"}
          className="self-end mt-4 flex gap-x-4 items-center "
        >
          <p className="font-thin text-[1.25rem] text-right ">
            I focus on improving my knowledge, <br />
            growing, and moving forward.
          </p>

          <hr className="w-[24rem] border-top border-white/50 border-solid" />
        </motion.div>

        <motion.div className="flex flex-col space-y-2 items-center">
          <div className="flex gap-x-6 items-center">
            <motion.img
              variants={variants}
              src={titleImg}
              alt="title"
              className="h-20 w-72 rounded-full object-cover "
            />

            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden "
            >
              <div>
                {staggerText?.split("")?.map((text, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 0.025 * index,
                      }}
                      className="text-[3rem] inline-block font-[1000] "
                      style={{ lineHeight: "1" }}
                    >
                      {text}
                    </motion.span>
                  );
                })}
              </div>

              <div className="absolute inset-0">
                {staggerText?.split("")?.map((text, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: "100%" },
                        hovered: { y: "0" },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 0.025 * index,
                      }}
                      className="text-[3rem] inline-block font-[1000] "
                      style={{ lineHeight: "1" }}
                    >
                      {text}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            <span className="text-[3rem] font-[100] ">Ideas</span>
          </div>

          <div className="flex items-center gap-x-6 ">
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden "
            >
              <div>
                {staggerTexts?.split("")?.map((text, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 0.025 * index,
                      }}
                      className="text-[3rem] py-2 inline-block font-[1000] "
                      style={{ lineHeight: "1" }}
                    >
                      {text}
                    </motion.span>
                  );
                })}
              </div>

              <div className="absolute inset-0">
                {staggerTexts?.split("")?.map((text, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { y: "100%" },
                        hovered: { y: "0" },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 0.025 * index,
                      }}
                      className="text-[3rem] py-2  inline-block font-[1000] "
                      style={{ lineHeight: "1" }}
                    >
                      {text}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            <span className="text-[3rem] font-[100] ">Business.</span>

            <motion.button
              variants={rightVariants}
              initial={{ x: 1000, opacity: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="p-6 px-16 text-black text-lg bg-[#FFA500] rounded-full "
            >
              Let’s Collaborate
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={variants} className="flex w-[75%] mx-auto">
          {cardData?.map((info) => (
            <motion.div
              whileHover={{
                background: "lightgray",
                color: "black",
                border: "none",
              }}
              key={info.id}
              className="flex space-y-10 flex-col justify-between p-3 border-[.1rem] border-gray-800 border-solid "
            >
              <h2 className="text-center font-bold ">{info.title}</h2>
              <p>{info.description}</p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-[#FFA500] p-3 rounded-full "
              >
                Go
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
