import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const writers = [
  { firstName: 'RYAN', lastName: 'REYNOLDS', imgSrc: '/ryanreynolds.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { firstName: 'RHET', lastName: 'REESE', imgSrc: '/rhettreese.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { firstName: 'SHAWN', lastName: 'LEVY', imgSrc: '/shawnlevy.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { firstName: 'PAUL', lastName: 'WERNICK', imgSrc: '/paulwernick.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
  { firstName: 'ZEB', lastName: 'WELLS', imgSrc: '/zebwells.jpg', href: 'https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' },
]

const About = () => (
  <section id="about" className="relative bg-[url('/aboutbg.png')] bg-cover bg-no-repeat bg-center font-bebas h-max">
    <div className="absolute inset-0 bg-gradient-to-b h-[260px] from-black/70 to-black/0" />
    <div className="absolute inset-0 bg-black/70" />

    <div className="lg:hidden md:mt-3 mt-2 flex h-max justify-end">
      <div className="mt-16 lg:mt-20 right-0 text-3xl bg-gradient-to-r from-[#E81127] to-[#820A16]" style={{ clipPath: "polygon(30% 0%, 100% 0, 100% 100%, 44% 100%, 0 100%)" }}>
        <div className="bg-[url('/bg1.png')] w-[180px] h-[68px] bg-auto flex justify-center items-center">
          <h2 className="ms-10">ABOUT</h2>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row-reverse">
      <div className="z-10 w-full">
        <div className="hidden lg:block">
          <div className="md:mt-3 mt-2 flex h-max justify-end">
            <div className="mt-16 lg:mt-20 right-0 text-3xl bg-gradient-to-r from-[#E81127] to-[#820A16]" style={{ clipPath: "polygon(30% 0%, 100% 0, 100% 100%, 44% 100%, 0 100%)" }}>
              <div className="bg-[url('/bg1.png')] lg:w-[400px] lg:h-[120px] bg-auto flex justify-center items-center">
                <h2 className="ms-10">ABOUT</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-y-2 md:gap-y-6 lg:gap-y-2 flex flex-col items-end uppercase lg:items-start px-3 md:pe-6">
          <div className="flex flex-col text-right lg:max-w-3xl lg:items-start lg:text-left mt-10 md:mt-6 tracking-normal">
            <h1 className="text-2xl md:text-3xl md:mt-5 leading-5 md:leading-none">Synopsis</h1>
            <h3 className="text-white/60 md:text-xl leading-tight md:leading-5 lg:pe-24">Deadpool and Wolverine team up in an epic adventure that blends humor, action, and mutant mayhem. When a new threat emerges, these unlikely allies must work together to save the world.</h3>
          </div>

          <div>
            <h3 className="text-2xl lg:mt-3 md:text-3xl mt-2 text-right lg:text-left">Director</h3>
            <Link href={writers[2].href} target="_blank" className="flex items-center gap-3">
              <div className="relative size-10">
                <Image
                  fill
                  src={writers[2].imgSrc}
                  className="rounded-full object-contain"
                  alt={writers[2].firstName + writers[2].lastName}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <p className="text-white/60 text-sm md:text-xl">
                {writers[2].firstName} {writers[2].lastName}
              </p>
            </Link>
          </div>
          <div>
            <h3 className="text-2xl lg:mt-6 md:text-3xl text-right lg:text-left">Writers</h3>
            <div className="flex flex-wrap justify-end md:flex-col lg:flex-row lg:max-w-xl lg:justify-start gap-x-4">
              {writers.map((writer, index) => (
                <Link key={index} href={writer.href} target="_blank" className="flex items-center justify-end gap-3 mb-3">
                  <div className="relative size-10">
                    <Image className="rounded-full object-contain"
                      fill
                      src={writer.imgSrc}
                      alt={writer.firstName + writer.lastName}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-1 text-sm md:text-xl text-white/60 leading-4">
                    <p>{writer.firstName}</p>
                    <p>{writer.lastName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[600px] lg:h-[760px] md:inset-x-10 md:inset-y-12 z-10 flex justify-center items-center bg-[url('/abouthero.png')] w-[100%] bg-no-repeat bg-center bg-auto md:bg-cover">
        <div className="flex items-center justify-center bg-white/30 size-48 lg:size-72 rounded-full">
          <div className="flex items-center justify-center bg-white/40 size-36 rounded-full lg:size-60">
            <div className="flex items-center justify-center bg-white/50 size-24 lg:size-44 rounded-full">
              <FaPlayCircle className='text-white text-5xl size-12' />
            </div>
          </div>
        </div>

        <div className='absolute w-full lg:w-3/4 -bottom-12 md:bottom-0 lg:bottom-16 h-[100px] rounded-[50%] bg-black z-10 blur-xl' />
      </div>
    </div>

    <div className='absolute w-full bottom-0 h-[211px] bg-gradient-to-b from-black/0 to-black/100' />
  </section>

);

export default About;
