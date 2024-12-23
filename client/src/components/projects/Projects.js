import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const projectData = [
    {
      title: "Tunez - Spotify Clone",
      des: "A clone of the Spotify app that plays music from a pre-set album. Users can seek, fast-forward, replay, rewind, increase/decrease volume as well as pause and play different songs.",
      src: projectOne,
      githubLink: "https://github.com/TammyBriggs/Phase-1-Project",
      internetLink: "https://tammybriggs.github.io/Phase-1-Project/",
    },
    {
      title: "Royal Stitches E-commerce Website",
      des: "The website showcases the company's latest collections. It integrates e-commerce functionalities to enable customers to purchase items directly from the website. You will need to run this server in a different tab as this site fetches from a backend - https://royal-stitches-server.vercel.app/",
      src: projectTwo,
      githubLink: "https://github.com/TammyBriggs/RoyalStitches-SEFP",
      internetLink: "https://royal-stitches-client.vercel.app/",
    },
    {
      title: "Food ChapChap Web App",
      des: "Food ChaChap is a platform where Dine in and Take away customers can Pre-Order their favorite meals from restaurants of their choice, so that their food is ready on arrival, saving time with payments made in advance.",
      src: projectThree,
      githubLink: "https://github.com/Moringa-Final-Project/FoodChapChap-Pre-Order-Service",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            internetLink={project.internetLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
