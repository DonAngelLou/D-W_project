import React from 'react'
interface MobileMenuProps {
    visible?: boolean;
}
const Mobilemenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible){
        return null;
    }
  return (
    <div className='bg-white w-44 absolute top-10 right-0 py-5 flex-col flex border-t-2 bg-opacity-90 items-center z-40'>
        <div className='flex flex-col gap-4'>
        <div className='text-black cursor-pointer p-1 hover:text-red-500'>About</div>
                 <div className='text-black cursor-pointer p-1 hover:text-red-500'>Spotlight</div>
                 <div className='text-black cursor-pointer p-1 hover:text-red-500'>Fan Zone</div>
                 <div className='text-red-500 cursor-pointer border-2 border-red-500 px-2 py-1 hover:text-black'>Watch Trailer</div>
           
        </div>
    </div>
  )
}

export default Mobilemenu