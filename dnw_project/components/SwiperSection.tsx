import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperSection = () => (
  <section className="py-12 bg-gray-800">
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img src="/images/slide1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide2.jpg" alt="Slide 2" />
      </SwiperSlide>
      {/* More slides... */}
    </Swiper>
  </section>
);

export default SwiperSection;
