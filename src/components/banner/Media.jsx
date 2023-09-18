import React from 'react'
import { FaLinkedinIn, FaReact, FaJs, FaInstagram } from "react-icons/fa";
import { SiCss3, SiPython } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/tamunotonye-briggs-9193a8203/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/tee_briggz/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media