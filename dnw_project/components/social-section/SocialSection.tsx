import { motion } from 'framer-motion';
import Image from 'next/image';
import dNwLogo from '@/public/d&w-logo.png';
import testimonialPhoto1 from '@/public/testimonial-photo-1.png';
import testimonialPhoto2 from '@/public/testimonial-photo-2.png';
import testimonialPhoto3 from '@/public/testimonial-photo-3.png';
import testimonialPhoto4 from '@/public/testimonial-photo-4.png';
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
    <section
      className='h-max bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage:
          `url('/social-fanzone-deadpool.png'),
          url('/social-fanzone-wolverine.png'),
          linear-gradient(to right, #A907181A, #BAA2021A),
          linear-gradient(#000000BF, #000000BF),
          url('/social-fanzone-bg-1.png')`,
        backgroundPosition:
          `-38px 213px,
          -70px 760px,
          center,
          center,
          center`,
        backgroundSize:
          `430px,
          850px 770px,
          cover,
          cover,
          cover`,
      }}>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-1 relative place-items-center py-12'
      >
        <div className='col-span-1 flex justify-center my-10 w-full'>
          <div className="relative h-[100px] w-[260px]">
            <Image
              src={dNwLogo}
              fill
              alt='Deadpool & Wolverine Logo'
            />
          </div>
          <div
            className='flex items-center absolute w-max px-4 top-[180px] left-[230px] -rotate-6'
            style={{
              backgroundImage: "url('/social-fanzone-bg-2.png'), linear-gradient(#BD0D38, #BD0D38)",
            }}
          >
            <span className='tracking-tighter text-lg font-medium'>FAN ZONE</span>
          </div>
        </div>

        {
          testimonialsData.map((data, index) => (
            <div key={index} className='py-3'>
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

      </motion.div>

      <div className='relative z-20'>
        <div className='absolute w-full bottom-0 h-[211px] bg-gradient-to-b from-black/0 to-black/100' />
      </div>
    </section>
  </>
);

export default SocialSection;
