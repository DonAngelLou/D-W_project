import { motion } from 'framer-motion';
import Link from 'next/link';
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
            font-bebas
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
            before:opacity-55
            before:h-screen

            ">            
           
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:flex-row justify-center gap-10 lg:basis-1/2 w-full h-full

            

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
        <div className='w-full h-full flex flex-col lg:flex-row z-30 pt-20'>
          <div className='w-full h-max '>
            <div className='lg:ml-20'>
                <div className='lg:mt-16'>
                  <img src="/d&w-logo.png" alt="hero" className='md:p-6 px-3 py-4 mx-auto lg:max-w-xl md:max-w-lg max-w-80'/>
                </div>
                <div className='flex items-center flex-col lg:items-start lg:ml-10'>
                  <p className='text-lg lg:text-4xl lg:text-left p-6 lg:max-w-2xl md:max-w-xl sm:max-w-lg text-center'>Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.</p>         
                    <div className='px-6 py-2 flex gap-10 justify-center lg:justify-start'>
                      <Link href='https://www.disney.ph/movies/deadpool-and-wolverine' target="_blank" className='text-[#E81127] bg-[#FBDC0D] py-2 px-4 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#FBDC0D] font-semibold '>Get Tickets Now</Link>
                      <Link href='https://www.youtube.com/watch?v=Idh8n5XuYIA' target="_blank" className='flex items-center gap-2 hover:text-white/80'><FaPlayCircle size={35}/><span>Watch Trailer</span></Link>  
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
      <div className='left-0 bg-white absolute top-3/4 rounded-r-full flex flex-row z-30 items-center'>
          <p className='py-3 px-4 text-black flex items-center font-semibold ' onClick={handleShareClick}>SHARE ON<span><MdOutlineKeyboardArrowRight size={25}/></span></p> 
          <div className={`flex items-center bg-red-500 py-3 px-4 rounded-r-full text-white bg-gradient-to-r from-[#E81127] to-[#820A16] gap-3 z-40 ${sharebutton}`}>
            <IoLogoFacebook size={25}/>
            <FaInstagram size={25}/>
            <FaXTwitter size={25}/>
            <IoLogoWhatsapp size={25}/>
            <FaThreads size={25}/>
          </div>
        </div>
      
    </section>
  );
};

export default Hero;
