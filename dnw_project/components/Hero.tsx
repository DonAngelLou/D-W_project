import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlayCircle, FaChevronRight } from 'react-icons/fa';
import { FaThreads, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io5';

interface LinkButtonProps {
  href: string;
  text: string;
}

interface ShareButtonProps {
  shareButton: boolean;
  handleShareClick: () => void;
}

// Left content section with logo, text, and buttons
const LeftContent = () => (
  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 md:p-8 lg:p-10 z-30 space-y-6 lg:space-y-8">
    <img
      src="/d&w-logo.png"
      alt="Deadpool and Wolverine"
      className="mt-10 lg:mt-0 md:pt-10"
      style={{
        width: '100%',
        maxWidth: '280px', // Mobile
        ...(window.innerWidth >= 768 && window.innerWidth < 1024 && { maxWidth: '360px' }), // Tablet
        ...(window.innerWidth >= 1024 && { maxWidth: '480px' }), // Desktop
      }}
    />
    <p
      className="text-center lg:text-left max-w-xs md:max-w-lg lg:max-w-xl"
      style={{
        fontSize: '16px', // Mobile
        ...(window.innerWidth >= 768 && window.innerWidth < 1024 && { fontSize: '18px' }), // Tablet
        ...(window.innerWidth >= 1024 && { fontSize: '24px' }), // Desktop
      }}
    >
      Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic, cinematic team-up throwdown. Come together in cinemas on July 24.
    </p>
    <div className="flex gap-4 justify-center lg:justify-start items-center">
      <LinkButton
        href="https://www.disney.ph/movies/deadpool-and-wolverine"
        text="Get Tickets Now"
      />
      <TrailerButton />
    </div>
  </div>
);

// Button components for ticket link and trailer
const LinkButton = ({ href, text }: LinkButtonProps) => (
  <Link href={href} target="_blank">
    <span className="text-[#E81127] bg-[#FBDC0D] hover:bg-gradient-to-r hover:from-white hover:to-[#FBDC0D] font-semibold"
      style={{
        padding: '8px 16px', // Mobile
        ...(window.innerWidth >= 768 && window.innerWidth < 1024 && { padding: '10px 20px' }), // Tablet
        ...(window.innerWidth >= 1024 && { padding: '12px 24px' }), // Desktop
      }}
    >
      {text}
    </span>
  </Link>
);

const TrailerButton = () => (
  <Link href="https://www.youtube.com/watch?v=Idh8n5XuYIA" target="_blank">
    <span className="flex items-center gap-2 hover:text-white/80"
      style={{
        fontSize: '14px', // Mobile
        ...(window.innerWidth >= 768 && window.innerWidth < 1024 && { fontSize: '18px' }), // Tablet
        ...(window.innerWidth >= 1024 && { fontSize: '20px' }), // Desktop
      }}
    >
      <FaPlayCircle
        style={{
          fontSize: '24px', // Mobile
          ...(window.innerWidth >= 768 && window.innerWidth < 1024 && { fontSize: '32px' }), // Tablet
          ...(window.innerWidth >= 1024 && { fontSize: '40px' }), // Desktop
        }}
      />
      Watch Trailer
    </span>
  </Link>
);

// Right content section for the hero image
const RightContent = () => (
  <div className="relative w-full flex items-center lg:items-end justify-center h-auto lg:h-full lg:max-w-[47%] lg:mt-20">
    <img
      src="/hero.png"
      alt="Deadpool and Wolverine"
      className="lg:mt-6"
      style={{
        width: '100%',
        maxWidth: '320px', // Mobile
        ...(window.innerWidth >= 768 && window.innerWidth < 1024 && { maxWidth: '480px' }), // Tablet
        ...(window.innerWidth >= 1024 && { maxWidth: '100%' }), // Desktop
        objectFit: window.innerWidth >= 1024 ? 'cover' : 'contain',
      }}
    />
  </div>
);

// Share button component with animation
const ShareButton = ({ shareButton, handleShareClick }: ShareButtonProps) => (
  <div className="absolute bottom-5 left-0 flex items-center z-50">
    <motion.div
      onClick={handleShareClick}
      className="flex items-center cursor-pointer"
      initial={{ width: '100px', borderRadius: '50px' }}
      animate={{
        width: shareButton ? '300px' : '100px',
        borderRadius: shareButton ? '30px 50px 50px 30px' : '50px',
        background: shareButton
          ? 'linear-gradient(to right, #E81127, #820A16)'
          : '#ffffff',
        color: shareButton ? '#ffffff' : '#000000',
      }}
      transition={{ duration: 0.5 }}
    >
      <ShareButtonContent shareButton={shareButton} />
    </motion.div>
  </div>
);

const ShareButtonContent = ({ shareButton }: { shareButton: boolean }) => (
  <>
    <div className="flex items-center gap-3 px-4 py-2 whitespace-nowrap">
      <span className="font-semibold">SHARE ON</span>
      <FaChevronRight
        className={`${shareButton ? 'rotate-90' : 'rotate-0'} transition-transform duration-500`}
      />
    </div>
    <div
      className={`flex items-center justify-between gap-3 overflow-hidden px-3 ${
        shareButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <IoLogoFacebook size={20} />
      <FaInstagram size={20} />
      <FaXTwitter size={20} />
      <IoLogoWhatsapp size={20} />
      <FaThreads size={20} />
    </div>
  </>
);

// Main Hero section component
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
        className="relative flex flex-col lg:flex-row justify-between w-full h-auto lg:h-screen bg-[url('/bg1.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-80 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:h-1/4 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:to-black lg:after:opacity-80"
      >
        <LeftContent />
        <RightContent />
      </motion.div>
      <ShareButton shareButton={shareButton} handleShareClick={handleShareClick} />
    </section>
  );
};

export default Hero;
