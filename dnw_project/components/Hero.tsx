import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlayCircle, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { FaThreads, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io5';

const Hero = () => {
  const [shareButton, toggleShareButton] = useState(false);

  const handleShareClick = () => {
    toggleShareButton(!shareButton);
  };

  return (
    <section className="relative font-bebas bg-[url('/bg.png')] bg-cover bg-center min-h-screen before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#CF1E11] before:to-[#CF1E11] before:opacity-55 transition-all duration-500 ease-in-out">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col lg:flex-row justify-between w-full h-auto lg:h-screen bg-[url('/bg1.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-80 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:h-1/4 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:to-black lg:after:opacity-80 transition-all duration-500 ease-in-out"
      >
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-10 z-30 space-y-6 lg:space-y-8 transition-all duration-500 ease-in-out">
          <img
            src="/d&w-logo.png"
            alt="Deadpool and Wolverine"
            className="w-[80%] max-w-xs md:max-w-sm lg:max-w-md mt-10 lg:mt-0 transition-all duration-500 ease-in-out"
          />
          <p className="text-center lg:text-left text-base md:text-lg lg:text-2xl max-w-xs md:max-w-lg lg:max-w-xl transition-all duration-500 ease-in-out">
            Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start items-center transition-all duration-500 ease-in-out">
            <Link href="https://www.disney.ph/movies/deadpool-and-wolverine" target="_blank">
              <span className="text-[#E81127] bg-[#FBDC0D] py-2 px-4 lg:py-3 lg:px-5 hover:bg-gradient-to-r hover:from-white hover:to-[#FBDC0D] font-semibold transition-all duration-500 ease-in-out">
                Get Tickets Now
              </span>
            </Link>
            <Link href="https://www.youtube.com/watch?v=Idh8n5XuYIA" target="_blank">
              <span className="flex items-center gap-2 hover:text-white/80 text-sm md:text-lg lg:text-xl transition-all duration-500 ease-in-out">
                <FaPlayCircle className="text-3xl md:text-4xl lg:text-5xl transition-all duration-500 ease-in-out" />
                Watch Trailer
              </span>
            </Link>
          </div>
        </div>

        {/* Right Background Section */}
        <div
          className="relative w-full flex items-center lg:items-end justify-center h-auto md:h-full lg:h-full lg:max-w-[47%] transition-all duration-500 ease-in-out"
        >
          <img
            src="/hero.png"
            alt="Deadpool and Wolverine"
            className="w-[70%] md:w-[55%] lg:w-full h-auto object-contain md:object-cover lg:object-cover transition-all duration-500 ease-in-out"
          />
        </div>
      </motion.div>

      {/* Share Button Section */}
      <div className="absolute bottom-5 left-0 flex items-center z-50 transition-all duration-500 ease-in-out">
        <motion.div
          onClick={handleShareClick}
          className="flex items-center cursor-pointer"
          initial={{ width: '100px', borderRadius: '50px' }} // Fully rounded in collapsed state
          animate={{
            width: shareButton ? '300px' : '100px', // Shortened expanded width to 300px
            borderRadius: shareButton ? '30px 50px 50px 30px' : '50px', // Square left, rounded right in expanded state
            background: shareButton
              ? 'linear-gradient(to right, #E81127, #820A16)' // Red gradient background in expanded state
              : '#ffffff', // White background in collapsed state
            color: shareButton ? '#ffffff' : '#000000',
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Section with Button Text */}
          <div className="flex items-center gap-3 px-4 py-2 transition-colors duration-500 ease-in-out whitespace-nowrap">
            <span className="font-semibold">SHARE ON</span>
            <FaChevronRight
              className={`${shareButton ? 'rotate-90' : 'rotate-0'} transition-transform duration-500`}
            />
          </div>

          {/* Right Section with Social Media Icons */}
          <div
            className={`flex items-center justify-between gap-3 overflow-hidden px-3 transition-all duration-500 ease-in-out ${
              shareButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <IoLogoFacebook size={20} />
            <FaInstagram size={20} />
            <FaXTwitter size={20} />
            <IoLogoWhatsapp size={20} />
            <FaThreads size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
