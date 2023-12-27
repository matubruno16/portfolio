import { CardService } from "./CardService";
import { FaDesktop } from "react-icons/fa";
import { AiOutlineDeploymentUnit, AiOutlineMobile } from "react-icons/ai";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section
      name="Services"
      className="xl:w-[80%] w-[95%] mx-auto h-auto my-20"
    >
      <h3 className="text-[50px] uppercase font-bold font-Oswald mt-6 text-center">
        Servicios
      </h3>
      <p className="text-center text-sm pb-[40px]">
      Implementación de diseño UI/UX avanzado, programación eficiente en diversos lenguajes y mantenimiento integral de sitios.
      </p>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1 }}
        className="grid grid-cols-1 gap-x-[20px] gap-y-[40px] p-[10px]  lg:grid-cols-3 place-items-center gap-4 "
      >
        <CardService
          icon={
            <FaDesktop
              style={{ color: "hsl(225,15%,40%)%)", fontSize: "54px" }}
            />
          }
          titleService="Diseño Web"
          descriptionService="El diseño web impacta directamente en la visibilidad y credibilidad empresarial, al tiempo que potencia la experiencia del usuario y transforma visitantes en clientes. Constituye un elemento esencial para cualquier empresa que aspire a destacar y triunfar en el competitivo mercado digital."
        />
        <CardService
          icon={
            <AiOutlineDeploymentUnit
              style={{ color: "hsl(225,15%,40%)%)", fontSize: "54px" }}
            />
          }
          titleService="desarrollo web "
          descriptionService="Ofrecemos servicios especializados en desarrollo web, un aspecto crucial para la creación de sitios web altamente funcionales y eficientes. Nos dedicamos a la creación de sitios personalizados, integrando tecnologías de vanguardia y funciones avanzadas para potenciar tanto la experiencia del usuario como la eficacia general del sitio."
        />
        <CardService
          icon={
            <AiOutlineMobile
              style={{ color: "hsl(225,15%,40%)%)", fontSize: "54px" }}
            />
          }
          titleService="RESPONSIVE"
          descriptionService="Un sitio web responsive mejora la experiencia del usuario, aumenta el tiempo de permanencia y reduce la tasa de rebote. Además, los motores de búsqueda (Google, Bin, etc.) favorecen a los sitios web responsive, lo que mejora un mejor posicionamiento SEO atrayendo trafico orgánico."
        />
      </motion.div>
    </section>
  );
};
