/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
    
  const skillData = [
    {
      id: 1,
      title: "Languages & Frameworks:",
      skills: "JavaScript, React Native, React.js",
    },
    {
      id: 2,
      title: "Styling",
      skills: "Tailwind CSS, HTML, CSS, Bootstrap",
    },
    {
      id: 3,
      title: "Tools & Technologies:",
      skills: "Git, Redux, Firebase",
    },
  ];

  return (
    <div className=" h-full w-[75%] mx-auto gap-x-16 flex items-center justify-around ">
      <div className=" space-y-6 flex flex-col flex-1">
        <p className="text-[1.25rem]">
          I’m Rahul Kumar Mehta, a passionate React Developer. I am constantly
          seeking new opportunities to enhance my skills and build innovative
          solutions. I thrive on challenges and am committed to continuous
          learning and growth in the tech industry.
        </p>

        <div className="space-y-6">
          {skillData?.map((data) => {
            return (
              <div key={data.id}>
                <h2 className="text-lg font-semibold ">{data?.title}</h2>

                <p className="text-md">{data?.skills}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" space-y-6 flex flex-col flex-1">

        <div className="space-y-2" >
          <h3 className="text-lg font-semibold">Qualifications</h3>
          <ul>
            <li>
              B-Tech (Computer Science Engineering) - Lovely Professional
              University
            </li>
            <li>Intermediate - Jindal Adarsh Vidyalaya</li>
            <li>Matriculation - Jindal Adarsh Vidyalaya</li>
          </ul>
        </div>

        <div className="space-y-4" >
          <h3 className="text-lg font-semibold ">Internship</h3>
          <p>
            React Native Developer Intern at Apptunix (February 2023 – August
            2023)
          </p>
          <p>
            During my internship at Apptunix, I worked on developing and
            maintaining mobile applications using React Native. I collaborated
            closely with cross-functional teams to enhance app performance, fix
            bugs, and implement new features. I also gained valuable experience
            with integrating APIs, managing app states with Redux, and
            optimizing user experience for both iOS and Android platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
