import { motion } from 'framer-motion';
import Image from 'next/image';
import background1 from '@/public/social-fanzone-bg-1.png';
import dNwLogo from '@/public/d&w-logo.png';
import testimonialPhoto1 from '@/public/testimonial-photo-1.png';
import testimonialPhoto2 from '@/public/testimonial-photo-2.png';
import testimonialPhoto3 from '@/public/testimonial-photo-3.png';
import testimonialPhoto4 from '@/public/testimonial-photo-4.png';
import { FaTwitter, FaHeart, FaComment } from 'react-icons/fa';
import { CiCircleInfo } from 'react-icons/ci';
import { RiLink } from "react-icons/ri";

const SocialSection = () => (
  <section className="h-[1252px]">
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='grid grid-cols-1 place-items-center'
    >
      <div className="col-span-1 relative h-[103.87px] w-[259.67px]">
        <Image
          src={dNwLogo}
          fill
          alt='Deadpool & Wolverine Logo'
        />
      </div>
      <div className='col-span-1 h-max w-[335px] px-3 py-2 bg-white rounded-lg'>
        <div className='flex'>
          <div className='relative h-[35px] w-[35px] me-2'>
            <Image
              src={testimonialPhoto1}
              fill
              alt='Testimonial Photo 1'
              className='rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex justify-between'>
              <small className='text-black text-xs font-bold'>seb</small>
              <FaTwitter className='text-[#1D9BF0]' />
            </div>
            <div className='flex gap-2'>
              <small className='text-[#526371] text-xs font-medium'>@ifyouknevbetter</small>
              <small className='text-[#526371] text-xs'>•</small>
              <small className='text-[#1D9BF0] text-xs font-bold'>Follow</small>
            </div>
          </div>
        </div>
        <p className='text-black text-sm mt-2'>
          Woke up to Deadpool and Wolverine reviews and I haven't seen
          a single tweet that had an cons about this movie... everyone is
          praising it like WE'RE SO BACK!!!
        </p>
        <div className="flex items-center justify-between mt-1 mb-1">
          <div className='space-x-2 font-medium text-xs'>
            <small className='text-[#526371]'>9:41 PM</small>
            <small className='text-[#526371]'>•</small>
            <small className='text-[#526371]'>July 26, 2024</small>
          </div>
          <CiCircleInfo className='text-[#526371]' />
        </div>
        <hr className='' />
        <div className='flex mt-1 text-xs font-semibold gap-4'>
          <div className='flex items-center gap-2'>
            <FaHeart className='text-[#FA1980]' />
            <small className='text-[#526371]'>1</small>
          </div>
          <div className='flex items-center gap-2'>
            <FaComment className='text-[#55ACEE]' />
            <small className='text-[#526371]'>Reply</small>
          </div>
          <div className='flex items-center gap-2'>
            <RiLink className='text-[#526371]' />
            <small className='text-[#526371]'>Copy Link</small>
          </div>
        </div>
        <button className='border text-[#1D9BF0] text-xs font-bold w-full rounded-full py-1 mt-2'>Read 5 replies</button>
      </div>
    </motion.div>
  </section>
);

export default SocialSection;
