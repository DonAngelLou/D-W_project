import { motion } from 'framer-motion';
import Image from 'next/image';
import dNwLogo from '@/public/d&w-logo.png';
import testimonialPhoto1 from '@/public/testimonial-photo-1.png';
import testimonialPhoto2 from '@/public/testimonial-photo-2.png';
import testimonialPhoto3 from '@/public/testimonial-photo-3.png';
import testimonialPhoto4 from '@/public/testimonial-photo-4.png';
import redVectorMb from '@/public/social-red-mb.png';
import redVectorMd from '@/public/social-red-md.png';
import redVectorLg from '@/public/social-red-lg.png';
import yellowVectorMd from '@/public/social-yellow-md.png'
import yellowVectorLg from '@/public/social-yellow-lg.png'
import Card from './Card';
import { CardProps } from './Card';

const testimonialsData: CardProps[] = [
  {
    avatarSrc: testimonialPhoto1,
    name: 'seb',
    username: 'ifyouknevbetter',
    commentParagraph1: `Woke up to Deadpool and Wolverine reviews and I haven't seen a single tweet that had an cons about this movie... everyone is praising it like WE'RE SO BACK!!!`,
    time: '9:41 PM',
    date: 'July 26, 2024',
    likesCount: '32',
    repliesCount: '5'
  },
  {
    avatarSrc: testimonialPhoto2,
    name: 'forgetful',
    username: 'yogrimothy',
    commentParagraph1: `My childhood in a movie. What a fantastic ride full of laughter, smiles and even sadness.`,
    commentParagraph2: `God I love Marvel.`,
    time: '11:41 PM',
    date: 'July 29, 2024',
    likesCount: '1',
    repliesCount: '2'
  },
  {
    avatarSrc: testimonialPhoto3,
    name: 'Daniela',
    username: 'DabniOTHfan',
    commentParagraph1: `@VancityReynolds, Hey Ryan Just saw Deadpool and the wolverine yesterday I came back to a movie theather after 4 years, and I love the movie!!!, loved the cameos & I still think that LFG was stolen from the gaffer Phil Parkinson lol lol. Wrexham Fan Here`,
    time: '9:41 PM',
    date: 'July 29, 2024',
    likesCount: '1',
  },
  {
    avatarSrc: testimonialPhoto4,
    name: 'Lew Allen',
    username: 'lewisallen90',
    commentParagraph1: `Despite it being a good laugh in places, the more I think on it, the more I wanted from Deadpool & Wolverine. I really wanted to love it.`,
    commentParagraph2: `Best mid credits scene in a long while though, I'll give it that.`,
    time: '11:23 PM',
    date: 'July 29, 2024',
    likesCount: '1',
  }
]

const SocialSection = () => (
  <>
    <section className='relative h-max lg: social-bg-container' id='fanzone'>
      {/* red vector mobile */}
      <img src={redVectorMb.src} alt="Red Vector" className='md:hidden absolute bottom-0 left-0' />
      {/* red vector md */}
      <img src={redVectorMd.src} alt="Red Vector" className='hidden md:block lg:hidden absolute bottom-0 left-0' />
      {/* red vector lg */}
      <img src={redVectorLg.src} alt="Red Vector" className='hidden lg:block absolute bottom-0 left-0' />
      {/* yellow vector md */}
      <img src={yellowVectorMd.src} alt="Yellow Vector" className='hidden md:block lg:hidden absolute bottom-0 right-0' />
      {/* yellow vector lg */}
      <img src={yellowVectorLg.src} alt="Yellow Vector" className='hidden lg:block absolute bottom-0 right-0' />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='grid relative place-items-center py-12'
      >
        <div className='flex justify-center my-10 w-full'>
          <div className="relative h-[96px] md:h-[152px] lg:h-[176px] w-[320px] md:w-[408px] lg:w-[464px]">
            <Image
              src={dNwLogo}
              fill
              alt='Deadpool & Wolverine Logo'
              className='px-10'
            />
            <div className='absolute -inset-y-4 md:-inset-y-3 lg:-inset-y-5 inset-x-4 flex justify-end items-end'>
              <div
                className='flex items-center w-max px-4 md:px-5 lg:px-[1.875rem] lg:py-1 -rotate-6'
                style={{
                  backgroundImage: "url('/social-fanzone-bg-2.png'), linear-gradient(#BD0D38, #BD0D38)",
                }}
              >
                <span className='font-bebas tracking-wider text-2xl md:text-3xl'>FAN ZONE</span>
              </div>
            </div>
          </div>
        </div>
        <div className='social-deadpool-bg z-10 h-full w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 w-[320px] md:w-[404px] lg:w-[840px] lg:mt-6 mx-auto px-2 w-375:p-0'>
            {
              testimonialsData.map((data, index) => (
                <div key={index} className='py-3 z-10'>
                  <Card
                    avatarSrc={data.avatarSrc}
                    name={data.name}
                    username={data.username}
                    commentParagraph1={data.commentParagraph1}
                    commentParagraph2={data.commentParagraph2}
                    time={data.time}
                    date={data.date}
                    likesCount={data.likesCount}
                    repliesCount={data.repliesCount}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </motion.div>

      {/* black overlay */}
      <div className='relative z-10 lg:h-[211px]'>
        <div className='absolute w-full bottom-0 h-[211px] bg-gradient-to-b from-black/0 to-black/100' />
      </div>
    </section>
  </>
);

export default SocialSection;
