import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlayCircle, FaChevronRight } from 'react-icons/fa';
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
        className="relative flex flex-col md:flex-row lg:flex-row justify-between w-full h-screen bg-[url('/bg1.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-80 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:h-1/4 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:to-black lg:after:opacity-80 transition-all duration-500 ease-in-out"
      >
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center md:items-start lg:items-start justify-center p-6 md:p-8 lg:p-10 md:pl-12 lg:pl-20 z-30 space-y-6 md:space-y-7 lg:space-y-8 transition-all duration-500 ease-in-out">
          <img
            src="/d&w-logo.png"
            alt="Deadpool and Wolverine"
            className="w-full max-w-[70%] md:max-w-sm lg:max-w-lg mt-10 lg:mt-0 transition-all duration-500 ease-in-out"
          />
          <p className="text-center md:text-left lg:text-left text-base md:text-xl lg:text-3xl max-w-xs md:max-w-lg lg:max-w-xl transition-all duration-500 ease-in-out">
            Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.
          </p>
          <div className="flex gap-4 md:gap-5 lg:gap-6 justify-center md:justify-start lg:justify-start items-center transition-all duration-500 ease-in-out">
            <Link href="https://www.disney.ph/movies/deadpool-and-wolverine" target="_blank">
              <span className="text-[#E81127] bg-[#FBDC0D] py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 hover:bg-gradient-to-r hover:from-white hover:to-[#FBDC0D] font-semibold transition-all duration-500 ease-in-out">
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
          className="relative w-full h-auto justify-center
            md:absolute md:right-0 md:top-16 md:h-auto md:max-w-[60%]
            lg:absolute lg:right-0 lg:top-16 lg:h-auto lg:max-w-[47%] flex items-end lg:items-start transition-all duration-500 ease-in-out"
        >
          <img
            src="/hero.png"
            alt="Deadpool and Wolverine"
            className="
              w-[55%] h-auto object-contain
              md:w-full md:h-full md:object-cover
              lg:w-full lg:h-full lg:object-cover transition-all duration-500 ease-in-out"
          />
        </div>
      </motion.div>

      {/* Share Button Section */}
      <div className="absolute bottom-5 left-0 md:left-0 lg:bottom-1 lg:left-0 flex items-center z-50 lg:right-auto transition-all duration-500 ease-in-out">
        <button
          className="flex items-center gap-3 py-3 px-4 md:py-3 md:px-4 lg:py-4 lg:px-5 bg-white text-black rounded-r-full shadow-md transition-all duration-500 ease-in-out"
          onClick={handleShareClick}
        >
          <span>SHARE ON</span>
          <FaChevronRight className={`${shareButton ? 'hidden' : 'block'}`} />
        </button>
        {shareButton && (
          <div className="flex items-center h-12 md:h-14 lg:h-16 px-3 md:px-3 lg:px-4 gap-3 bg-gradient-to-r from-[#E81127] to-[#820A16] text-white rounded-r-full transition-all duration-500 ease-in-out">
            <IoLogoFacebook size={20} />
            <FaInstagram size={20} />
            <FaXTwitter size={20} />
            <IoLogoWhatsapp size={20} />
            <FaThreads size={20} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
