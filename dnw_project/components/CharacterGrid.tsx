import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Keyboard } from 'swiper/modules'; // Import Keyboard module
import 'tailwindcss/tailwind.css';  // Assuming Tailwind CSS is already set up

// Import images
import p1 from '../public/p1.png';
import p2 from '../public/p2.png';
import p3 from '../public/p3.png';
import p4 from '../public/p4.png';
import p5 from '../public/p5.png';
import p6 from '../public/p6.png';

const CharacterGrid: FC = () => {
  // Image list
  const images = [p1, p2, p3, p4, p5, p6];

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{ enabled: true }} // Enable keyboard navigation
        modules={[Pagination, Keyboard]} // Add Keyboard module
        className="w-full h-full"
      >
        {/* Image 1 */}
        <SwiperSlide>
          <img
            src={p1.src}
            alt="Picture 1"
            className="w-full h-full object-cover object-left" // Custom position: aligned left
          />
        </SwiperSlide>

        {/* Image 2 */}
        <SwiperSlide>
          <img
            src={p2.src}
            alt="Picture 2"
            className="top-[20px] w-full h-full object-cover object-right" // Custom position: aligned right
          />
        </SwiperSlide>

        {/* Image 3 */}
        <SwiperSlide>
          <img
            src={p3.src}
            alt="Picture 3"
            className="w-full h-full object-cover object-center" // Centered image
          />
        </SwiperSlide>

        {/* Image 4 */}
        <SwiperSlide>
          <img
            src={p4.src}
            alt="Picture 4"
            className="top-[20px] w-full h-full object-cover object-top" // Align image to the top
          />
        </SwiperSlide>

        {/* Image 5 */}
        <SwiperSlide>
          <img
            src={p5.src}
            alt="Picture 5"
            className="top-[40px] w-full h-full object-cover object-bottom" // Align image to the bottom
          />
        </SwiperSlide>

        {/* Image 6 */}
        <SwiperSlide>
          <img
            src={p6.src}
            alt="Picture 6"
            className="top-[30px] w-full h-full object-cover object-bottom-right" // Align bottom-right
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CharacterGrid;
