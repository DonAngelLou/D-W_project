import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { FaThreads,FaXTwitter,FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp,IoLogoFacebook } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  const [sharebutton, setSharebutton] = useState('hidden');

  const handleShareClick = () => {
    setSharebutton(sharebutton === 'hidden' ? 'flex' : 'hidden');
  };

  return (
    <section className="
            bg-[url('/bg.png')]
            bg-cover
            bg-no-repeat
            bg-center
            h-screen

            before:absolute
            before:inset-x-0
            before:bg-gradient-to-r
            before:from-[#CF1E11]
            before:to-[#CF1E11]
            before:opacity-50
            before:h-screen           
            ">            
           
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:flex-row justify-center gap-10 lg:basis-1/2 w-full h-screen

            bg-[url('/bg1.png')]
            bg-cover
            bg-no-repeat
            bg-center
            
           
            
            before:absolute
            
            before:inset-x-0           
            before:bg-gradient-to-t from-black to-transparent
            before:opacity-50            
            before:h-1/4
            before:bottom-[-50px]
            md:before:bottom-[-70px]
            
            "
      >
        <div className='mt-9 text-center px-8 flex flex-col max-w-lg lg:max-w-[700px] z-30'>
          <img src="/d&w-logo.png" alt="hero" className='h-36 lg:h-[250px] lg:[700px] '/>
          <p className='mt-8'>Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.</p>
          <div>
            <div className='mt-10 flex gap-10 justify-center'>
              <button className='text-[#E81127] bg-[#FBDC0D] py-2 px-4 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#FBDC0D] font-semibold'>Get Tickets Now</button>
              <button className='flex items-center gap-2 font-semibold'><FaPlayCircle size={35}/><span>Watch Trailer</span></button>  
            </div>
          </div>
        </div>
        <div className='z-30'>
          <img src="/hero.png" alt="hero" className='h-96 lg:max-h-[900px] lg:h-auto'/>
        </div>
        <div className='left-0 bg-white absolute top-3/4 rounded-r-full flex flex-row'>
          <p className='py-3 px-4 text-black flex items-center font-semibold' onClick={handleShareClick}>SHARE ON<span><MdOutlineKeyboardArrowRight size={25}/></span></p> 
          <div className={`bg-red-500 py-3 px-4 rounded-r-full text-white bg-gradient-to-r from-[#E81127] to-[#820A16] gap-3 z-40 ${sharebutton}`}>
            <IoLogoFacebook size={20}/>
            <FaInstagram size={20}/>
            <FaXTwitter size={20}/>
            <IoLogoWhatsapp size={20}/>
            <FaThreads size={20}/>
          </div>
        </div>         
      </motion.div>
      
    </section>
  );
};

export default Hero;