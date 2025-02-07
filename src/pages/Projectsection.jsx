/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: "Swiggy Clone",
    description:
      "A scalable food delivery platform featuring dynamic restaurant search, cart functionality, and Firebase Authentication using React.js and Redux Toolkit.",
    image: "/swiggy.jpg",
    github: "https://github.com/yourusername/swiggy-clone",
    tags: ["React", "Redux Toolkit", "Firebase"],
  },
  {
    id: 2,
    title: "Dating Professional App",
    description:
      "A React Native app designed to foster professional networking and meaningful connections with intuitive features.",
    image: "/dating.jpg",
    tags: ["React Native", "Redux", "Firebase"],
  },
  {
    id: 3,
    title: "Car Rental App",
    description:
      "An easy-to-use vehicle rental application with location-based services and real-time booking using React Native.",
    image: "/carRental.jpg",
    tags: ["React Native", "Redux Toolkit", "Maps"],
  },
  {
    id: 4,
    title: "Gifify",
    description:
      "Gifify is a web app for exploring and sharing GIFs and stickers, offering a fun and interactive experience.",
    image: "/gifify.jpg",
    github: "https://github.com/rahulmehta26/Gifify",
    tags: ["React"],
  },

  {
    id: 5,
    title: "Zentry",
    description:
      "A recreation of the Zentry website with interactive animations using Framer Motion, delivering a seamless user experience.",
    image: "/zentry.jpg",
    github: "https://github.com/rahulmehta26/Zentry",
    tags: ["React", "Framer Motion"],
  },
];

const Projectsection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-foreground">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="bg-[#a259ff] h-fit cursor-pointer text-[#fff] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative aspect-video">
              <img
                src={project?.image}
                alt={project.title}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-[#fff] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent text-accent-foreground font-medium px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-[#fff] hover:text-foreground transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-[#fff] hover:text-foreground transition-colors"
                    >
                      <TbExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projectsection;
