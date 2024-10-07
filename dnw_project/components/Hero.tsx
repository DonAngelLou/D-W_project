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
    <section className="relative font-bebas bg-[url('/bg.png')] bg-cover bg-center min-h-screen before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#CF1E11] before:to-[#CF1E11] before:opacity-55">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col lg:flex-row justify-between w-full h-screen bg-[url('/bg1.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-80 after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-b after:from-transparent after:to-black after:opacity-80"
      >
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-10 pl-20 z-30 space-y-8">
          <img
            src="/d&w-logo.png"
            alt="Deadpool and Wolverine"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
          <p className="text-center lg:text-left text-lg lg:text-3xl lg:max-w-xl">
            Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.
          </p>
          <div className="flex gap-6 justify-center lg:justify-start items-center">
            <Link href="https://www.disney.ph/movies/deadpool-and-wolverine" target="_blank">
              <span className="text-[#E81127] bg-[#FBDC0D] py-2 px-4 hover:bg-gradient-to-r hover:from-white hover:to-[#FBDC0D] font-semibold">
                Get Tickets Now
              </span>
            </Link>
            <Link href="https://www.youtube.com/watch?v=Idh8n5XuYIA" target="_blank">
              <span className="flex items-center gap-2 hover:text-white/80">
                <FaPlayCircle size={35} />
                Watch Trailer
              </span>
            </Link>
          </div>
        </div>

        {/* Right Background Section */}
        <div className="absolute right-0 top-19 bottom-0 h-auto w-auto max-w-[40%]">
          <img src="/hero.png" alt="Deadpool and Wolverine" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      {/* Share Button Section */}
      <div className="absolute bottom-1 left-0 flex items-center z-50">
        <button
          className="flex items-center gap-3 py-4 px-5 bg-white text-black rounded-r-full shadow-md"
          onClick={handleShareClick}
        >
          <span>SHARE ON</span>
          <FaChevronRight className={`${shareButton ? 'hidden' : 'block'}`} />
        </button>
        {shareButton && (
          <div className="flex items-center h-16 px-4 gap-3 bg-gradient-to-r from-[#E81127] to-[#820A16] text-white rounded-r-full">
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
