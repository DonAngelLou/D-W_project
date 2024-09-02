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
    <section className="relative flex justify-center items-center bg-black min-w-screen h-screen overflow-hidden"> 
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{ enabled: true }} 
        modules={[Pagination, Keyboard]} 
        className="w-full h-full"
        loop={true} // Loop through images for carousel effect
        autoplay={{
          delay: 3000, // Automatically slide every 3 seconds
          disableOnInteraction: false, 
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Picture ${index + 1}`}
              className="w-full h-full object-cover object-top" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CharacterGrid;
