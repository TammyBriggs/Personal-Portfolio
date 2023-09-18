import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "Creative Problem Solver.", "Continuous Learner.", "Tech Lover."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tamunotonye Briggs</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#01d5ff"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a self-driven Individual determined to use my passion for technology and programming
         to create impactful advancements within the continent of Africa,
         as well as plan and ensure its availability to the widest range of people. 
         Currently pursuing an honours degree in Computer Science at the African Leadership University.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner