import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="h-max p-12 md:py-24 md:px-32 bg-white text-black flex flex-col gap-6 md:gap-10 justify-center items-center font-bebas md:text-lg lg:text-xl">
    <div className="relative w-[188px] h-[48px]">
      <Image
        src='/image.png'
        fill
        alt="Marvel Studios Logo"
      />
    </div>
    <div className="flex flex-wrap">
      <Link href='/' className="hover:text-[#E81127] px-3 md:px-4 transition duration-200">ABOUT</Link>
      <Link href='/' className="hover:text-[#E81127] px-3 md:px-4 transition duration-200">SPOTLIGHTS</Link>
      <Link href='/' className="hover:text-[#E81127] px-3 md:px-4 transition duration-200">FAN ZONE</Link>
    </div>
    <hr className="border border-black/50 w-full" />
    <p className="text-center">&copy; 2024 DEADPOOL & WOLVERINE FAN PROJECT. ALL RIGHTS RESERVED.</p>
  </footer>
);

export default Footer;