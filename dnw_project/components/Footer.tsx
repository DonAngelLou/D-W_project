import Image from "next/image";
import ScrollLink from "./ScrollLink";

const Footer = () => (
  <footer className="h-max p-12 md:py-24 md:px-32 bg-white text-black flex flex-col gap-6 md:gap-10 justify-center items-center font-bebas md:text-lg lg:text-xl">
    <div className="relative w-[188px] h-[48px]">
      <Image
        src='/image.png'
        fill
        alt="Marvel Studios Logo"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="flex flex-wrap gap-6">
      <ScrollLink id="about">ABOUT</ScrollLink>
      <ScrollLink id="spotlight">SPOTLIGHTS</ScrollLink>
      <ScrollLink id="fanzone">FAN ZONE</ScrollLink>
    </div>
    <hr className="border border-black/50 w-full" />
    <p className="text-center">&copy; 2024 DEADPOOL & WOLVERINE FAN PROJECT. ALL RIGHTS RESERVED.</p>
  </footer>
);

export default Footer;