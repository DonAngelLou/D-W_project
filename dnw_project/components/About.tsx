import { FaPlayCircle } from "react-icons/fa";

const About = () => (
  <section className="
            bg-[url('/aboutbg.png')]
            bg-cover
            bg-no-repeat
            bg-center
            h-screen
            
            before:absolute            
            before:inset-x-0     
            before:bg-gradient-to-b from-black via-transparent to-black
            before:opacity-95            
            before:h-screen
          
            flex
            flex-col
            md:flex-row-reverse
            font-bebas
            
  ">       
    
    <div className="w-full h-full z-40">
        <div className="mt-10 flex justify-end">
            <div className="right-0 text-3xl font-bold bg-gradient-to-r from-[#E81127] to-[#820A16]" style={{clipPath: "polygon(30% 0%, 100% 0, 100% 100%, 44% 100%, 0 100%)"}}>
                <div className="bg-[url('/bg1.png')] px-12 py-3 ml-5 bg-cover">
                ABOUT
                </div>            
            </div>
        </div>
        <div className="flex flex-col items-end text-right mr-3 lg:max-w-3xl lg:items-start lg:text-left p-6">
          <h1 className="font-normal text-3xl lg:text-4xl mt-6 md:mt-10">Synopsis</h1>
          <h3 className="text-stone-300 text-xl">Deadpool and Wolverine team up in an epic adventure that blends humor, action, and mutant mayhem. When a new threat emerges, these unlikely allies must work together to save the world.</h3>
        </div>
        
        <div className=" flex flex-col items-end mr-5 uppercase lg:items-start p-6">
          <h1 className="font-normal text-3xl lg:mt-6 lg:text-4xl mt-2" >Director</h1>
          <div className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Shawn_Levy_by_Gage_Skidmore_2.jpg/1200px-Shawn_Levy_by_Gage_Skidmore_2.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Shawn Levy</div>
                    </div>
                </div>
            <h1 className="font-medium text-3xl lg:mt-6 lg:text-4xl mt-2" >Writer</h1>
            <div className="flex flex-wrap justify-end gap-3 md:flex-col lg:flex-row lg:max-w-xl lg:justify-start">
                <div className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="https://ntvb.tmsimg.com/assets/assets/57282_v9_bc.jpg?w=360&h=480" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Ryan Reynolds</div>
                    </div>
                </div>
                <div className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="https://vz.cnwimg.com/thumbc-338x338/wp-content/uploads/2018/06/Rhett-Reese.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Rhett Reese</div>
                    </div>
                </div>
                <div className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Zeb_Wells_by_Gage_Skidmore_2.jpg/1200px-Zeb_Wells_by_Gage_Skidmore_2.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Zeb Wells</div>
                    </div>
                </div>
                <div className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Shawn_Levy_by_Gage_Skidmore_2.jpg/1200px-Shawn_Levy_by_Gage_Skidmore_2.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Shawn Levy</div>
                    </div>
                </div>
                <div className="flex items-center gap-2"> 
                  <img className="w-10 h-10 rounded-full" src="https://m.media-amazon.com/images/M/MV5BMjE3MjQxNTc3OV5BMl5BanBnXkFtZTgwMDk0NDE1NTM@._V1_.jpg" alt=""/>
                    <div className="text-stone-300 text-xl">
                        <div>Paul Wernick</div>
                    </div>
                </div>
            </div>
 
        </div> 
        
    </div>
    <div className="w-full h-full z-40  bg-[url('/abouthero.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center rounded-full">
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
  