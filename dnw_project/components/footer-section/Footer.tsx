import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="h-max p-12 md:py-24 md:px-32 bg-white text-black flex flex-col gap-6 md:gap-10 justify-center items-center tracking-tighter">
    <div className="relative w-[188px] h-[48px]">
      <Image
        src='/image.png'
        fill
        alt="Marvel Studios Logo"
      />
    </div>
    <div className="font-bold text-xs">
      <Link href='/' className="hover:bg-[#E81127] hover:text-white px-4 py-2 transition duration-200">ABOUT</Link>
      <Link href='/' className="hover:bg-[#E81127] hover:text-white px-4 py-2 transition duration-200">SPOTLIGHTS</Link>
      <Link href='/' className="hover:bg-[#E81127] hover:text-white px-4 py-2 transition duration-200">FAN ZONE</Link>
    </div>
    <hr className="border border-black/50 w-full" />
    <p className="text-xs text-center font-bold">&copy; 2024 DEADPOLL & WOLVERINE FAN PROJECT. ALL RIGHTS RESERVED.</p>
  </footer>
);

export default Footer;