import { motion } from "framer-motion"
import { SocialShareButton  } from "./SocialShareButton";
import { useState } from "react";
import ovni from "../assets/Images/ufo.png"

export const Home = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  return (
    <section
      onMouseMove={handleMouseMove}
      name="Home"
      className="bg-BackgroundHome bg-cover bg-center p-6 h-[750px] overflow-hidden mx-auto flex flex-col justify-content-center ">
        <img 
          src={ovni} 
          alt="ovni" 
          className="absolute w-[60px] h-[60px]"
          style={{left: `${position.x}px`, top: `${position.y}px`}}
          />
      <motion.div 
        initial={{y:-100}}
        animate={{ y: 0}} 
        transition={{
          ease: "easeOut", duration: 1
        }}
        className="mx-auto p-6 md:w-[700px]  text-white text-center z-10 pt-[100px] md:pt-[150px] pl-10 ">
        <h2 className="text-[36px] md:text-[48px]">Hi! I am Matías </h2>
        <h1 className="sm:text-[30px]">Web Developer Junior</h1>
        <p className="text-[20px] mt-4">I focus on design elegance and functionality. I am currently a student of the university technical degree in computer applications development.</p>

        <SocialShareButton />        
         
      </motion.div>
      
    </section>
  );
};
