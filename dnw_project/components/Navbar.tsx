import React, { useCallback, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Mobilemenu from './Mobilemenu';
import ScrollLink from './ScrollLink';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, [setShowMobileMenu]);

  return (
    <nav className="w-full z-40 font-bebas fixed">
      <div className="px-4 md:px-16 py-2 md:p-4 flex justify-between transition duration-500 bg-white">
        {/* Logo */}
        <div className="relative h-8 w-24"> {/* Adjust width as needed */}
          <Image
            src="/image.png"
            alt="icon"
            layout="fill" // Ensures the image fills the container
            objectFit="contain" // Keeps aspect ratio
            priority // Loads the logo faster for improved performance
          />
        </div>
        {/* Large Screen Navigation */}
        <div className="flex-row ml-8 gap-7 hidden md:flex text-lg">
          <ScrollLink id="about">About</ScrollLink>
          <ScrollLink id="spotlight">Spotlight</ScrollLink>
          <ScrollLink id="fanzone">Fan Zone</ScrollLink>
          <Link
            href="https://www.youtube.com/watch?v=Idh8n5XuYIA"
            target="_blank"
            className="text-[#E81127] cursor-pointer border-2 border-[#E81127] px-2 py-1 hover:text-white hover:bg-gradient-to-r hover:from-[#E81127] hover:via-[#F27481] hover:to-[#FFFFFF] active:bg-[#E81127] active:text-white"
          >
            Watch Trailer
          </Link>
        </div>
        {/* Small Screen Navigation */}
        <div
          onClick={toggleMenu}
          className="md:hidden flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <GiHamburgerMenu className="text-[#E81127]" size={20} />
          <Mobilemenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
