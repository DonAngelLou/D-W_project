import { FC } from 'react';
import 'typeface-bebas-neue';
import { motion } from 'framer-motion';

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
    <section className="relative w-full h-full bg-black py-16 lg:py-24">
      {/* Background Image with Dark Overlay (kept outside margin) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${spotlightBg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      {/* Red Vectors (kept outside margin) */}
      <img
        src={red1.src}
        className="absolute bottom-[-200px] left-0 w-[500px] lg:w-[649px] h-[500px] lg:h-[660px] opacity-80"
        alt="Red Vector"
      />
      <img
        src={red2.src}
        className="absolute top-[-70px] right-[-160px] w-[500px] lg:w-auto h-[500px] lg:h-[1400px] opacity-80"
        alt="Red Vector"
      />

      {/* Black Overlay Section for the Spotlight Title */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[url('/black_overlay.png')] bg-no-repeat bg-top" />
      
      {/* Core Content within Margins */}
      <div className="relative z-10 mx-[5%]">

        {/* Centered SPOTLIGHT Title */}
        <div className="relative text-center mb-8 mt-18">
          <h2 className="text-yellow-500 font-bebas text-5xl font-bold">SPOTLIGHTS</h2>
          <h3 className="text-[#d3d3d3] font-bebas text-xl uppercase mt-5 mb-30">
            See interviews and behind the scenes videos or images from the set.
          </h3>
        </div>

        {/* Videos Label */}
        <h3 className="text-white font-bebas text-2xl font-bold pt-20 lg:text-2xl mb-6">
          VIDEOS
        </h3>

        {/* Static Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Image 1 */}
          <motion.div whileHover={{ scale: 1 }} className="hover:text-white group relative">
            <img
              src={img1.src}
              className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
              alt="Deadpool & Wolverine Stars"
            />
            <h3 className="font-bebas text-xl lg:text-xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all">
              The stars of 'Deadpool & Wolverine' take Vanity Fair's infamous lie detector test.
            </h3>
          </motion.div>

          {/* Image 2 */}
          <motion.div whileHover={{ scale: 1 }} className="hover:text-white group relative">
            <img
              src={img2.src}
              className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
              alt="Interviewing Donny and Cong"
            />
            <h3 className="font-bebas text-xl lg:text-xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all">
              Interviewing Deadpool & Wolverine's main guys with Donny and Cong.
            </h3>
          </motion.div>

          {/* Image 3 */}
          <motion.div whileHover={{ scale: 1 }} className="hover:text-white group relative">
            <img
              src={img3.src}
              className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
              alt="Puppies Interview"
            />
            <h3 className="font-bebas text-xl lg:text-xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all">
              To celebrate “Deadpool & Wolverine,” we had Ryan Reynolds and Hugh Jackman play with puppies while answering questions.
            </h3>
          </motion.div>

          {/* Image 4 with Overlay */}
          <motion.div whileHover={{ scale: 1 }} className="hover:text-white group relative">
            <div className="relative">
              <img
                src={img4.src}
                className="w-full h-auto rounded-md group-hover:brightness-75 transition-all"
                alt="MTV Interview"
              />
              <img
                src={rectangle.src}
                className="absolute top-0 right-0 h-full w-1/3 opacity-80"
                alt="Overlay"
              />
              <img
                src={arrow.src}
                className="absolute top-1/2 right-10 transform -translate-y-1/2"
                alt="Arrow"
              />
            </div>
            <h3 className="font-bebas text-xl lg:text-xl mt-2 text-[#d3d3d3] group-hover:underline group-hover:text-white transition-all">
              MTV’s Josh Horowitz chats with Ryan Reynolds and Hugh Jackman about finally teaming up for “Deadpool & Wolverine.”
            </h3>
          </motion.div>
        </div>

        {/* Pictures Label */}
        <h3 className="text-white font-bebas text-2xl font-bold lg:text-2xl pt-20 mt-20">
          PICTURES
        </h3>
      </div>
    </section>
  );
};

export default SpotlightSection;
