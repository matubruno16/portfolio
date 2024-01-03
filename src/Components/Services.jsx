import { CardService } from "./CardService";
import { FaDesktop } from "react-icons/fa";
import { AiOutlineDeploymentUnit, AiOutlineMobile } from "react-icons/ai";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section
      name="Servicios"
      className="xl:w-[80%] w-[95%] mx-auto h-auto my-20"
    >
      <h3 className="text-[50px] uppercase font-bold font-Oswald mt-10 text-center">
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
          titleService="Wordpress"
          descriptionService="Optimice su presencia digital con soluciones web de vanguardia en WordPress. Desarrollamos sitios personalizados que reflejan la excelencia de su negocio. Además, ofrecemos servicios integrales de mantenimiento para garantizar un rendimiento continuo y confiable. Mejore su impacto en línea con nuestra experiencia."
        />
        <CardService
          icon={
            <AiOutlineDeploymentUnit
              style={{ color: "hsl(225,15%,40%)%)", fontSize: "54px" }}
            />
          }
          titleService="desarrollo web "
          descriptionService="
            Especializado en desarrollo web, ofrezco soluciones excepcionales con HTML, CSS y Javascript. Desde sitios estáticos hasta dinámicos con React JS, garantizo una experiencia de usuario única y funcionalidad de vanguardia. Potencie su presencia en línea con mi experiencia técnica y creativa. ¡¡No dudes en consultarnos!!"
        />
        <CardService
          icon={
            <AiOutlineMobile
              style={{ color: "hsl(225,15%,40%)%)", fontSize: "54px" }}
            />
          }
          titleService="Testing"
          descriptionService="Perfeccione la calidad de su sitio web o aplicación con nuestros servicios de testing. Nuestro equipo experto identificará y resolverá cualquier problema, asegurando un rendimiento óptimo y una experiencia del usuario sin contratiempos. Confíe en nosotros para garantizar la excelencia en cada aspecto de su proyecto digital."
        />
      </motion.div>
    </section>
  );
};
