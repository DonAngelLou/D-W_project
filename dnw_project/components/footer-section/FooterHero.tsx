import { motion } from 'framer-motion';
import Image from 'next/image';
import dNwLogo from '@/public/d&w-logo.png';
import { IoPlay } from 'react-icons/io5';

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
                <div className="relative h-[113px] md:h-[214px] lg:h-[281px] w-[325px] md:w-[616px] lg:w-[807px]">
                    <Image
                        src={dNwLogo}
                        fill
                        alt='Deadpool & Wolverine Logo'
                    />
                </div>
                <div className='flex justify-center gap-11 w-full tracking-tighter font-bold text-lg'>
                    <button className='bg-[#FBDC0D] text-[#E81127] text-sm px-4 md:px-6 py-3 hover:bg-[#FBDC0D]/80'>Get Tickets Now</button>
                    <button className='flex items-center gap-3 group'>
                        <IoPlay className='rounded-full bg-white text-slate-900 size-9 p-1 group-hover:bg-white/80' />
                        <span className='group-hover:text-white/80'>Watch Trailer</span>
                    </button>
                </div>
            </motion.div>

            <div className='relative w-full inset-x-0 h-[211px] bottom-0 bg-gradient-to-b from-black/0 to-black/100' />
        </section>
    )
}

export default FooterHero;