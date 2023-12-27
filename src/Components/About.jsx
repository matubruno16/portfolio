import { motion } from "framer-motion";
import fotoCv from "../assets/Images/home-fondo.webp";
import imgHtml from "../assets/Images/html-5.png";
import imgCss from "../assets/Images/css-3.png";
import imgJs from "../assets/Images/js.png";
import imgReactjs from "../assets/Images/react.png";
import imgWordpress from "../assets/Images/wordpress.png";
import imgMysql from "../assets/Images/mysql.png";

export const About = () => {
  return (
    <section
      name="About"
      className="w-[90%] xl:w-[80%] max-md:w-[80%] mx-auto pt-16"
    >
      <div className="md:grid md:grid-cols-2">
        <div className="m-10">
          <div className="md:flex md:justify-center ">
            <img
              className="w-60 max-md:mx-auto md:w-40 rounded bg-cover max-w-[100%] object-cover"
              src={fotoCv}
              alt="Foto Curriculum"
            />
            <div className="flex flex-col text-center ml-4">
              <p className="mt-4">
                <span className="font-bold">Nombre:</span> Matias Ceferino Bruno
              </p>
              <p className="mt-4">
                <span className="font-bold">Perfil:</span> Full Stack
              </p>
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="mx-auto bg-Blue border-Blue text-white rounded-md px-6 py-2 mt-4 shadow-lg hover:shadow-blue-500/50 transition-all duration-500 hover:bg-BlueHover "
                href="https://drive.google.com/file/d/1NYTMeKp3Hv-3ureKPevJVZ-QWF-EAtx1/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Descargar CV
              </motion.a>
            </div>
          </div>
          <div>
            <div className="my-10">
              <p className="text-xl mt-8 font-bold text-center">Skills</p>
              <div className="grid grid-cols-3  justify-items-center mt-8 gap-4 sm:w-[70%] mx-auto ">
                <img className="w-[70px] " src={imgHtml} alt="Logo HTML" />
                <img className="w-[70px]" src={imgCss} alt="Logo CSS" />
                <img className="w-[70px]" src={imgJs} alt="Logo Javascript" />
                <img className="w-[70px]" src={imgReactjs} alt="" />
                <img
                  className="w-[70px]"
                  src={imgWordpress}
                  alt="Logo Wordpress"
                />
                <img className="w-[70px]" src={imgMysql} alt="Logo MySQL" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-Oswald uppercase font-bold text-[50px] md:mb-6 md:pt-10 border-b md: border-blue-700 mx-auto w-[250px] text-center ">
           Sobre Mi
          </h3>
          <p className="p-4 mb-[-10px] text-xl font-light">
          Soy un apasionado del Desarrollo Web Full Stack y actualmente estoy ampliando mis conocimientos mediante la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas en la Universidad Nacional del Centro de la Provincia de Buenos Aires.
          </p>
          <p className="p-4 mb-[-10px] text-xl font-light">
          Esa misma curiosidad me motivó a profundizar en el desarrollo de tecnologías, aprendiendo de forma autodidacta y constante, lo que me permitió dar mis primeros pasos como profesional.
          </p>
          <p className="p-4 mb-[-10px] text-xl font-light">
          Estoy emocionado por contribuir al éxito de nuevos proyectos. Estoy convencido de que mi habilidad para colaborar y mi enfoque proactivo son activos valiosos para cualquier equipo de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};
