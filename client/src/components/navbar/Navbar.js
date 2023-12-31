import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import { navLinksdata } from '../../constants';

const Navbar = () => {

  const [showMenu, setShowMenu]=useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Update the isLargeScreen state when the window is resized
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-center items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        {isLargeScreen ? ( // Render the menu items for large screens
          <ul className="mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          // Render the menu icon for small screens
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
        )}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
                <a href="mailto:trenatto82@gmail.com" className="bannerIcon">
                  <SiGmail />
                </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar