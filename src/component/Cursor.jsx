/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {

    const [position, setPosition] = useState({x:0,y:0});

    console.log(position)

    useEffect(() => {
        const mouseMove = (e) => {
            
                setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [] )

  return (
    <motion.div
    className='w-8 h-8 fixed bg-transparent z-50 rounded-full border-[0.1rem] border-solid border-white/50 '
    animate = {{x: position.x, y:position.y}}
    ></motion.div>
  );
};

export default Cursor;