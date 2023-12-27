import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { SocialShareButton } from "./SocialShareButton";
import ovni from "../assets/Images/ufo.png";

export const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    moveOvni();
  }, []);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      moveOvni();
    } else {
      controls.stop();
    }
  };

  const moveOvni = async () => {
    while (true) {
      await controls.start({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        transition: { duration: 2, ease: "linear" },
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
      {({ isVisible }) => (
        <section
          onMouseMove={handleMouseMove}
          name="Inicio"
          className="bg-BackgroundHome bg-cover bg-center p-6 h-screen overflow-hidden mx-auto flex flex-col relative"
        >
          <motion.img
            src={ovni}
            alt="ovni"
            className="absolute w-[60px] h-[60px]"
            animate={controls}
          />
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            className="mx-auto p-6 md:w-[700px]  text-white text-center z-10 pt-[100px] md:pt-[150px] pl-10 "
          >
            <h2 className="text-[46px] md:text-[56px]">¡Hola! Soy Matías Bruno</h2>
            <h1 className="text-[20px] md:text-[40px]">Desarrollador Web Junior</h1>
            <p className="text-[20px] md:text-[24px] mt-16">
            Me especializo en la elegancia, diseño y funcionalidad de sitios web. Actualmente, soy estudiante de desarrollo de aplicaciones informáticas en la universidad.
            </p>
            <SocialShareButton />
          </motion.div>
        </section>
      )}
    </VisibilitySensor>
  );
};
