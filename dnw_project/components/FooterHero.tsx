import { motion } from 'framer-motion';
import Image from 'next/image';
import dNwLogo from '@/public/d&w-logo.png';
import { IoPlay } from 'react-icons/io5';
import { Anton } from 'next/font/google';
import Link from 'next/link';

const anton = Anton({ subsets: ['latin'], weight: '400' });

const FooterHero = () => {
    return (
        <section
            className='h-[824px] lg:h-[1200px] bg-no-repeat'
            style={{
                backgroundImage:
                    `linear-gradient(#00000066, #00000066), url('/footer-hero-bg.png')`,
                backgroundPosition:
                    `center, center`,
                backgroundSize:
                    `cover, cover`,
            }}>

            <div className='relative w-full top-0 h-[211px] bg-gradient-to-t from-black/0 to-black/100' />

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col gap-10 justify-center items-center h-1/2 lg:h-[776px]">
                <div className="relative h-[112px] md:h-[212px] lg:h-[280px] w-[296px] md:w-[596px] lg:w-[796px]">
                    <Image
                        src={dNwLogo}
                        fill
                        alt='Deadpool & Wolverine Logo'
                    />
                </div>
                <div className='flex justify-center gap-8 md:gap-14 w-full tracking-tighter font-bold text-lg'>
                    <Link href='https://www.disney.ph/movies/deadpool-and-wolverine' target='_blank' className={`${anton.className} bg-gradient-to-r from-[#FBDC0D] to-[#FBDC0D] hover:from-white hover:to-[#FBDC0D] text-[#E81127] px-5 md:px-7 py-3 text-base md:text-lg lg:text-xl`}>Get Tickets Now</Link>
                    <Link href='https://www.youtube.com/watch?v=Idh8n5XuYIA' target='_blank' className='flex items-center gap-3 group'>
                        <IoPlay className='rounded-full bg-white text-slate-900 size-9 p-2 group-hover:bg-white/80' />
                        <span className={`${anton.className} group-hover:text-white/80 text-sm md:text-base lg:text-lg tracking-normal`}>Watch Trailer</span>
                    </Link>
                </div>
            </motion.div>

            {/* black overlay */}
            <div className='relative w-full inset-x-0 h-[211px] bottom-0 bg-gradient-to-b from-black/0 to-black/100' />
        </section>
    )
}

export default FooterHero;