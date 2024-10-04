import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { FaThreads, FaXTwitter, FaInstagram, FaChevronRight } from "react-icons/fa6";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io5";

const Hero = () => {
  const [sharebutton, toggleSharebutton] = useState(false);

  const handleShareClick = () => {
    toggleSharebutton(!sharebutton);
  };

  return (
    <section className="
            font-bebas
            bg-[url('/bg.png')]
            bg-cover
            bg-no-repeat
            bg-center
            min-h-screen

            before:absolute
            before:inset-x-0
            before:bg-gradient-to-r
            before:from-[#CF1E11]
            before:to-[#CF1E11]
            before:opacity-55
            before:min-h-screen
            ">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:flex-row justify-center gap-10 lg:basis-1/2 h-screen

            

            bg-[url('/bg1.png')]
            bg-cover
            bg-no-repeat
            bg-center
                              
            before:absolute            
            before:inset-x-0     
            before:bg-gradient-to-t from-black via-transparent to-transparent
            before:opacity-80            
            before:h-screen        
            "
      >
        <div className='w-full h-full flex flex-col justify-center lg:flex-row z-30 pt-20'>
          <div className='w-full h-max'>
            <div className='lg:ml-20 flex flex-col items-center'>
              <div className='lg:mt-16'>
                <img src="/d&w-logo.png" alt="hero" className='md:p-6 px-3 py-4 mx-auto lg:max-w-xl md:max-w-lg max-w-80' />
              </div>
              <div className='flex items-center flex-col gap-6 lg:items-start lg:ml-10'>
                <p className='px-8 md:px-0 text-lg lg:text-4xl lg:text-left py-2 lg:max-w-2xl md:max-w-xl sm:max-w-lg text-center'>Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.</p>
                <div className='flex gap-10 justify-center lg:justify-start'>
                  <Link href='https://www.disney.ph/movies/deadpool-and-wolverine' target="_blank" className='text-[#E81127] bg-[#FBDC0D] py-2 px-4 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#FBDC0D] font-semibold '>Get Tickets Now</Link>
                  <Link href='https://www.youtube.com/watch?v=Idh8n5XuYIA' target="_blank" className='flex items-center gap-2 hover:text-white/80'><FaPlayCircle size={35} /><span>Watch Trailer</span></Link>
                </div>
              </div>
            </div>

          </div>
          <div className="w-full h-full bg-[url('/hero.png')]          
            bg-no-repeat
            bg-center 
            bg-contain
          ">

          </div>
        </div>

      </motion.div>

      <div className='bg-white absolute top-3/4 flex items-center rounded-r-full z-50 h-[64px]'>
        <button className='py-4 px-5 text-black flex items-center gap-3' onClick={handleShareClick}>
          <span>SHARE ON</span>
          <FaChevronRight className={`${sharebutton ? 'hidden' : 'block'}`} />
        </button>
        <div className={`${sharebutton ? 'block' : 'hidden'} bg-red-500 rounded-r-full flex items-center h-full text-white bg-gradient-to-r from-[#E81127] to-[#820A16] gap-3 z-40 px-2`}>
          <IoLogoFacebook size={20} />
          <FaInstagram size={20} />
          <FaXTwitter size={20} />
          <IoLogoWhatsapp size={20} />
          <FaThreads size={20} />
        </div>
      </div>

    </section>
  );
};

export default Hero;
