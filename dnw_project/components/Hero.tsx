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
      className="mt-10 lg:mt-0 md:pt-10 w-full max-w-[280px] md:max-w-[360px] lg:max-w-[480px]"
    />
    <p className="text-center lg:text-left max-w-xs md:max-w-lg lg:max-w-xl text-base md:text-lg lg:text-2xl">
      Marvel Studios’ “Deadpool & Wolverine” delivers the ultimate, iconic,
      cinematic team-up throwdown. Come together in cinemas on July 24.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
    <span className="text-[#E81127] bg-[#FBDC0D] hover:bg-gradient-to-r hover:from-white hover:to-[#FBDC0D] font-semibold py-2 px-4 md:py-2.5 md:px-5 lg:py-3 lg:px-6 text-sm md:text-base lg:text-lg">
      {text}
    </span>
  </Link>
);

const TrailerButton = () => (
  <Link href="https://www.youtube.com/watch?v=Idh8n5XuYIA" target="_blank">
    <span className="flex items-center gap-2 hover:text-white/80 text-sm md:text-base lg:text-lg">
      <FaPlayCircle className="text-2xl md:text-3xl lg:text-4xl" />
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
      className="lg:mt-6 w-full max-w-[320px] md:max-w-[480px] lg:max-w-full object-contain lg:object-cover"
    />
  </div>
);

// Share button component without smooth transitions
const ShareButton = ({
  shareButton,
  handleShareClick,
}: ShareButtonProps) => (
  <div className="absolute bottom-5 left-0 flex items-center z-50">
    <div
      onClick={handleShareClick}
      className={`flex items-center cursor-pointer ${
        shareButton ? 'w-[300px]' : 'w-[100px]'
      } ${
        shareButton ? 'rounded-[30px_50px_50px_30px]' : 'rounded-full'
      } ${
        shareButton
          ? 'bg-gradient-to-r from-[#E81127] to-[#820A16] text-white'
          : 'bg-white text-black'
      }`}
    >
      <ShareButtonContent shareButton={shareButton} />
    </div>
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
      <div className="relative flex flex-col lg:flex-row justify-between w-full h-auto lg:h-screen bg-[url('/bg1.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-80 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:h-1/4 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:to-black lg:after:opacity-80">
        <LeftContent />
        <RightContent />
      </div>
      <ShareButton
        shareButton={shareButton}
        handleShareClick={handleShareClick}
      />
    </section>
  );
};

export default Hero;
