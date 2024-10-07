import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const writers = [
  { name: 'RYAN REYNOLDS', imgSrc: '/ryanreynolds.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { name: 'RHET REESE', imgSrc: '/rhettreese.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { name: 'ZEB WELLS', imgSrc: '/zebwells.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { name: 'SHAWN LEVY', imgSrc: '/shawnlevy.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { name: 'PAUL WERNICK', imgSrc: '/paulwernick.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
]

const About = () => (
  <section
    id="about"
    className="
            relative
            bg-[url('/aboutbg.png')]
            bg-cover
            bg-no-repeat
            bg-center
            min-h-screen
            pb-4
            md:pb-6
            lg:pb-8
            flex
            flex-col
            md:flex-row-reverse
            font-bebas"
  >

    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black opacity-95" />

    <div className="z-10 w-full">
      <div className="md:mt-3 mt-2 flex justify-end">
        <div className="lg:mt-20 mt-16 right-0 text-3xl font-bold bg-gradient-to-r from-[#E81127] to-[#820A16]" style={{ clipPath: "polygon(30% 0%, 100% 0, 100% 100%, 44% 100%, 0 100%)" }}>
          <div className="bg-[url('/bg1.png')] w-[212px] h-[68px] lg:w-[400px] lg:h-[100px] bg-auto flex justify-center items-center">
            <span className="ms-10">ABOUT</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end text-right lg:max-w-3xl lg:items-start lg:text-left p-6">
        <h1 className="font-normal text-2xl md:text-3xl md:mt-5">Synopsis</h1>
        <h3 className="text-stone-300 text-lg lg:text-xl">Deadpool and Wolverine team up in an epic adventure that blends humor, action, and mutant mayhem. When a new threat emerges, these unlikely allies must work together to save the world.</h3>
      </div>

      <div className=" flex flex-col items-end uppercase lg:items-start px-6">
        <h1 className="font-normal text-2xl lg:mt-3 md:text-3xl mt-2" >Director</h1>
        <Link href='https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' target="_blank" className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-full" src="shawnlevy.jpg" alt="" />
          <p className="text-stone-300 text-lg lg:text-xl">
            Shawn Levy
          </p>
        </Link>
        <h1 className="font-medium text-2xl lg:mt-6 md:text-3xl mt-6" >Writers</h1>
        <div className="flex flex-wrap justify-end gap-3 md:flex-col lg:flex-row lg:max-w-xl lg:justify-start">
          {writers.map((writer, index) => (
            <Link key={index} href={writer.href} target="_blank" className="flex items-center justify-end gap-2">
              <img className="w-10 h-10 rounded-full object-center" src={writer.imgSrc} alt={writer.name} />
              <p className="text-stone-300 text-lg lg:text-xl">{writer.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

    <div className="w-full h-screen z-30 bg-[url('/abouthero.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center rounded-full">
      <div className="flex items-center justify-center h-44 w-44 bg-white rounded-full bg-opacity-20 lg:h-52 lg:w-52">
        <div className="flex items-center justify-center h-36 w-36 bg-white rounded-full bg-opacity-50 lg:h-44 lg:w-44">
          <div className="flex items-center justify-center h-28 w-28 bg-white rounded-full bg-opacity-70 lg:h-36 lg:w-36">
            <FaPlayCircle className={`text-white text-5xl`} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
