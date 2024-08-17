import React, { useCallback, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Mobilemenu from './Mobilemenu';


const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    },[setShowMobileMenu])
  return (
    <nav className='w-full z-40'>
        <div className='px-4 md:px-16 py-6 flex justify-between transition duration-500 bg-white bg-opacity-90'>
            <img className='h-8' src='/image.png' alt='icon' />
            {/* Large Screen */}
            <div className='flex-row ml-8 gap-7 hidden md:flex font-semibold'>
                 <div className='text-black cursor-pointer p-1 hover:text-red-500'>About</div>
                 <div className='text-black cursor-pointer p-1 hover:text-red-500'>Spotlight</div>
                 <div className='text-black cursor-pointer p-1 hover:text-red-500'>Fan Zone</div>
                 <div className='text-red-500 cursor-pointer border-2 border-red-500 px-2 py-1 hover:text-black'>Watch Trailer</div>
                
  
            </div>
            {/* Small Screen */}
            <div onClick={toggleMenu}className='md:hidden flex flex-row items-center gap-2 cursor-pointer relative'>
                <GiHamburgerMenu/>
                <Mobilemenu visible={showMobileMenu}/>
            </div>
       
            </div>
    </nav>
  )
}

export default Navbar