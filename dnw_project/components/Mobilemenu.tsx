import React from 'react'
import ScrollLink from './ScrollLink';
import Link from 'next/link';
interface MobileMenuProps {
    visible?: boolean;
}
const Mobilemenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible){
        return null;
    }
  return (
    <div className='bg-white w-44 absolute top-10 right-0 py-5 flex-col flex border-t-2 bg-opacity-90 items-center z-40 font-bebas'>
        <div className='flex flex-col gap-4'>
                 <ScrollLink id='about'>About</ScrollLink>
                 <ScrollLink id='spotlight'>Spotlight</ScrollLink>
                 <ScrollLink id='fanzone'>Fan Zone</ScrollLink>
                 <Link href='https://www.youtube.com/watch?v=Idh8n5XuYIA' target="_blank" className='text-[#E81127] cursor-pointer border-2 border-[#E81127] px-2 py-1 hover:text-white hover:bg-gradient-to-r hover:from-[#E81127] hover:via-[#F27481] hover:to-[#FFFFFF] active:bg-[#E81127] active:text-white'>Watch Trailer</Link>
           
        </div>
    </div>
  )
}

export default Mobilemenu