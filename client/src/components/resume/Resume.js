import React from 'react'
import Title from '../layouts/Title';
import { resume } from "../../assets/index";

const Resume = () => {

  const openPDFInNewWindow = () => {
    // Replace 'your_resume.pdf' with the actual path to your PDF file
    const resumeFilePath = resume;
    window.open(resumeFilePath, '_blank');
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
      </div>
        <div>
        <p className='justify-center items-center text-center'>
          View my Resume <span onClick={openPDFInNewWindow} style={{ cursor: 'pointer', color: '#01d5ff' }}>here</span>
        </p>
        </div>
    </section>
  );
}

export default Resume