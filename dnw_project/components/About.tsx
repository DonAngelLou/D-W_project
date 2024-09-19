import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const About = () => (
  <section className="
            bg-[url('/aboutbg.png')]
            bg-cover
            bg-no-repeat
            bg-center
                    
            before:absolute            
            before:inset-x-0     
            before:bg-gradient-to-b from-black via-transparent to-black
            before:opacity-95            
            before:h-screen
          
            flex
            flex-col
            md:flex-row-reverse
            font-bebas"
            id="about">       
    
    <div className="w-full h-max z-30">
        <div className="md:mt-10 mt-2 flex justify-end">
            <div className="lg:mt-20 mt-16 right-0 text-3xl font-bold bg-gradient-to-r from-[#E81127] to-[#820A16]" style={{clipPath: "polygon(30% 0%, 100% 0, 100% 100%, 44% 100%, 0 100%)"}}>
                <div className="bg-[url('/bg1.png')] px-12 py-4 ml-5 lg:px-16 lg:py-5 bg-auto">
                ABOUT
                </div>            
            </div>
        </div>
        <div className="flex flex-col items-end text-right mr-3 lg:max-w-3xl lg:items-start lg:text-left p-6">
          <h1 className="font-normal text-3xl lg:text-4xl md:mt-10">Synopsis</h1>
          <h3 className="text-stone-300 text-xl">Deadpool and Wolverine team up in an epic adventure that blends humor, action, and mutant mayhem. When a new threat emerges, these unlikely allies must work together to save the world.</h3>
        </div>
        
        <div className=" flex flex-col items-end mr-5 uppercase lg:items-start px-6">
          <h1 className="font-normal text-3xl lg:mt-6 lg:text-4xl mt-2" >Director</h1>
          <Link href='https://www.imdb.com/name/nm0506613/?ref_=tt_ov_dr' target="_blank" className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="shawnlevy.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Shawn Levy</div>
                    </div>
                </Link>
            <h1 className="font-medium text-3xl lg:mt-6 lg:text-4xl mt-2" >Writer</h1>
            <div className="flex flex-wrap justify-end gap-3 md:flex-col lg:flex-row lg:max-w-xl lg:justify-start">
                <Link  href='https://www.imdb.com/name/nm0005351/?ref_=tt_ov_wr' target="_blank" className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full object-center" src="ryanreynolds.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Ryan Reynolds</div>
                    </div>
                </Link>
                <Link href='https://www.imdb.com/name/nm1014201/?ref_=nv_sr_srsg_0_tt_2_nm_6_in_0_q_rhett' target="_blank" className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="rhettreese.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Rhett Reese</div>
                    </div>
                </Link>
                <Link href='https://www.imdb.com/name/nm2745845/?ref_=fn_al_nm_1' target="_blank"className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="zebwells.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Zeb Wells</div>
                    </div>
                </Link>
                <Link href='https://www.imdb.com/name/nm0506613/?ref_=fn_al_nm_1' target="_blank" className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="shawnlevy.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Shawn Levy</div>
                    </div>
                </Link>
                <Link href='https://www.imdb.com/name/nm1116660/?ref_=nv_sr_srsg_0_tt_3_nm_5_in_0_q_paul%2520wer' target="_blank" className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="paulwernick.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Paul Wernick</div>
                    </div>
                </Link>
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
  