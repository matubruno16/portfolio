import { CardProyect } from "./CardProyect";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import homeBoutique from "../assets/Images/home-Boutique-De-Hebras.webp";
import homeBienesRaices from "../assets/Images/home-bienes-raices.webp";
import homeCoinBase from "../assets/Images/home-coinbase.webp";
import homeSocialMedia from "../assets/Images/home-social-media.webp";
import homeSunnySide from "../assets/Images/home-sunnyside.webp";
import homeRelojJs from "../assets/Images/home-reloj.webp";

export const Proyects = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isVisible =
        window.scrollY + window.innerHeight >
        document.getElementById("seccion-proyects").offsetTop;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar la visibilidad inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section name="Proyects" className="w-[80%] mx-auto h-auto ">
      <h3 className="text-[50px] uppercase font-bold font-Oswald mt-6 text-center">
        Proyects
      </h3>
      <p className="text-center text-sm pb-[40px]">
        Some projects created with HTML5, CSS3, Javascript and Wordpress
      </p>

      <div
        id="seccion-proyects"
        className="grid grid-cols-1 gap-x-[20px] gap-y-[40px] p-[10px] md:grid-cols-2 xl:grid-cols-3 place-content-center justify-items-center"
      >
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://boutiquedehebras.com.ar"
            urlCod="https://boutiquedehebras.com.ar"
            img={homeBoutique}
            title="Boutique de Hebras"
            description="Wordpress ecommerce store with shopping cart."
          />
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://bienes-raices-matias.netlify.app"
            urlCod="https://github.com/matubruno16/bienesraices"
            img={homeBienesRaices}
            title="Web Bienes Raices"
            description="Web designed in HTML, SCSS and Javascript."
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://coinbasecripto.netlify.app"
            urlCod="https://github.com/matubruno16/coin_base"
            img={homeCoinBase}
            title="CoinBase Copy"
            description="Web designed in HTML, SCSS and Javascript."
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.5, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://social-media-dashboard-matias-bruno.netlify.app"
            urlCod="https://github.com/matubruno16/social-media-dashboard"
            img={homeSocialMedia}
            title="Social Media Dashboard"
            description="Social media dashboard en React and Tailwind CSS."
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 2, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://sunnyside-single-page.netlify.app"
            urlCod="https://github.com/matubruno16/sunnyside-single-page"
            img={homeSunnySide}
            title="Challenge Sunny Side "
            description="challenge developed in React and Tailwind CSS."
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 2.5, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://relojenvivo.netlify.app"
            urlCod="https://github.com/matubruno16/reloj-js"
            img={homeRelojJs}
            title="Live Clock"
            description="Live updated clock with JavaScript transitions."
          />
        </motion.article>
      </div>
    </section>
  );
};
