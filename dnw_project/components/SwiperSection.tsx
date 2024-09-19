import { FC } from 'react';
import 'typeface-bebas-neue';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import images
import spotlightBg from '../public/spotlight_bg.png';
import blackOverlay from '../public/black_overlay.png';
import img1 from '../public/img1.png';
import img2 from '../public/img2.png';
import img3 from '../public/img3.png';
import img4 from '../public/img4.png';
import rectangle from '../public/rectangle.png';
import arrow from '../public/arrow.png';
import red1 from '../public/red1.png';
import red2 from '../public/red2.png';

const SpotlightSection: FC = () => {
  return (
    <section className="relative w-full h-full bg-black py-16 lg:py-24 overflow-hidden" id='spotlight'>
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-left-top"
        style={{
          backgroundImage: `url(${spotlightBg.src})`,
        }}
      >
        <div className="min-w-screen h-full inset-0 bg-black opacity-80 bg-cover" />
      </div>

      {/* Red Vectors */}
      <img
        src={red1.src}
        className="absolute bottom-[-200px] left-0 w-[400px] h-[400px] lg:w-[649px] lg:h-[660px] opacity-80 hidden lg:block"
        alt="Red Vector"
      />
      
      <img
        src={red2.src}
        className="absolute top-0 right-[-100px] w-[300px] h-[300px] lg:w-auto lg:h-[1200px] opacity-80 object-cover overflow-hidden hidden lg:block"
        alt="Red Vector"
      />

      {/* Black Overlay Section for the Spotlight Title */}
      <div className="absolute top-0 left-0 w-screen h-[300px] bg-[url('/black_overlay.png')] bg-no-repeat bg-top bg-cover" />

      {/* Core Content */}
      <div className="relative z-10 mx-[5%]">
        {/* Centered SPOTLIGHT Title */}
        <div className="text-center mb-8 mt-18">
          <h2 className="text-yellow-500 font-bebas text-6xl font-bold">SPOTLIGHTS</h2>
          <h3 className="text-[#d3d3d3] font-bebas text-2xl uppercase mt-5">
            See interviews and behind the scenes videos or images from the set.
          </h3>
        </div>

        {/* Videos Label */}
        <h3 className="text-white font-bebas text-3xl font-bold pt-20 lg:text-3xl mb-6">VIDEOS</h3>

        {/* Static Image Grid for Desktop and Swiper for Mobile */}
        <div className="lg:grid grid-cols-1 lg:grid-cols-4 gap-8 hidden">
          {/* Image 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="group relative">
            <a href="https://www.youtube.com/watch?v=Xenstc6mHWs" target="_blank" rel="noopener noreferrer">
              <img
                src={img1.src}
                className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
                alt="Deadpool & Wolverine Stars"
              />
            </a>
            <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all text-center lg:text-left">
              The stars of 'Deadpool & Wolverine' take Vanity Fair's infamous lie detector test.
            </h3>
          </motion.div>

          {/* Image 2 */}
          <motion.div whileHover={{ scale: 1.05 }} className="group relative">
            <a href="https://www.youtube.com/watch?v=Y3mV4g3ReMk" target="_blank" rel="noopener noreferrer">
              <img
                src={img2.src}
                className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
                alt="Interviewing Donny and Cong"
              />
            </a>
            <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all text-center lg:text-left">
              Interviewing Deadpool & Wolverine's main guys with Donny and Cong.
            </h3>
          </motion.div>

          {/* Image 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="group relative">
            <a href="https://www.youtube.com/watch?v=ca6-AbCD_WY" target="_blank" rel="noopener noreferrer">
              <img
                src={img3.src}
                className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
                alt="Puppies Interview"
              />
            </a>
            <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all text-center lg:text-left">
              To celebrate “Deadpool & Wolverine,” we had Ryan Reynolds and Hugh Jackman play with puppies while answering questions.
            </h3>
          </motion.div>

          {/* Image 4 with Overlay */}
          <motion.div whileHover={{ scale: 1.05 }} className="group relative">
            <a href="https://www.youtube.com/watch?v=L6y8viGzWhI" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src={img4.src}
                  className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
                  alt="MTV Interview"
                />
              </div>
            </a>
            <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all text-center lg:text-left">
              MTV’s Josh Horowitz chats with Ryan Reynolds and Hugh Jackman about finally teaming up for “Deadpool & Wolverine.”
            </h3>
          </motion.div>
        </div>

        {/* Swiper for Mobile View */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            a11y={{ enabled: true }}
            breakpoints={{
              1280: { // Desktop view - 4 images
                slidesPerView: 4,
                spaceBetween: 30,
              },
              768: {  // Tablet view - 2 images
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: { // Mobile view - 1 image
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=Xenstc6mHWs" target="_blank" rel="noopener noreferrer">
                <img src={img1.src} className="w-full h-auto rounded-md" alt="Deadpool & Wolverine Stars" />
              </a>
              <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] text-center">
                The stars of 'Deadpool & Wolverine' take Vanity Fair's infamous lie detector test.
              </h3>
            </SwiperSlide>

            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=Y3mV4g3ReMk" target="_blank" rel="noopener noreferrer">
                <img src={img2.src} className="w-full h-auto rounded-md" alt="Interviewing Donny and Cong" />
              </a>
              <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] text-center">
                Interviewing Deadpool & Wolverine's main guys with Donny and Cong.
              </h3>
            </SwiperSlide>

            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=ca6-AbCD_WY" target="_blank" rel="noopener noreferrer">
                <img src={img3.src} className="w-full h-auto rounded-md" alt="Puppies Interview" />
              </a>
              <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] text-center">
                To celebrate “Deadpool & Wolverine,” we had Ryan Reynolds and Hugh Jackman play with puppies while answering questions.
              </h3>
            </SwiperSlide>

            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=L6y8viGzWhI" target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <img src={img4.src} className="w-full h-auto rounded-md" alt="MTV Interview" />
                  <img src={rectangle.src} className="absolute top-0 right-0 h-full w-1/3 opacity-80" alt="Overlay" />
                  <img src={arrow.src} className="absolute top-1/2 right-10 transform -translate-y-1/2" alt="Arrow" />
                </div>
              </a>
              <h3 className="font-bebas text-2xl mt-2 text-[#d3d3d3] text-center">
                MTV’s Josh Horowitz chats with Ryan Reynolds and Hugh Jackman about finally teaming up for “Deadpool & Wolverine.”
              </h3>
            </SwiperSlide>

            <div className="swiper-button-prev text-white"></div>
            <div className="swiper-button-next text-white"></div>
          </Swiper>
        </div>

        {/* Pictures Label */}
        <h3 className="text-white font-bebas text-3xl font-bold pt-20 lg:text-3xl mt-20">PICTURES</h3>
      </div>
    </section>
  );
};

export default SpotlightSection;
