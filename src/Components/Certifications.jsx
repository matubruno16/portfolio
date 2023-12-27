import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certifGoogle from "../assets/Certificate/CertidicadoGoogleActivateDesarrolloWeb.webp";
import certifADDPython from "../assets/Certificate/CertificadoAnalisisDeDatosConPython.webp";
import certifArgProg from "../assets/Certificate/CertificadoArgentinaPrograma2022.webp";
import certifDesarWeb from "../assets/Certificate/CertificadoDesarrolloWebCompleto.webp";
import certifHtmlCss from "../assets/Certificate/CertificadoHTMLyCSS.webp";
import certifJavascript from "../assets/Certificate/CertificadoJavascript.webp";
import certifPPF from "../assets/Certificate/CertificadoPrimerosPasoDelDesarrolloFrontEndTICMAS.webp";
import certifTesting from "../assets/Certificate/CertificadoSoftwareTestingMasterClass.webp";
import certifWordpress from "../assets/Certificate/CertificadoWordpress.webp";
import certifReactJS from "../assets/Certificate/CertificadoUTNDesarrolloWebREACTJS.webp";

export const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section name="Certifications" className="w-[85%] mx-auto py-[40px]">
      <h3 className="text-[50px] uppercase font-bold font-Oswald mt-6 text-center">
        Certificaciones
      </h3>
      <p className="text-center text-sm pb-[40px]">
        Certificaciones obtenidas
      </p>
      <div>
        <Slider {...settings}>
          <div className="">
            <img
              className="bg-cover px-2"
              src={certifReactJS}
              alt="Certificado Desarrollo Web con React JS"
            />
          </div>
          <div className="">
            <img
              className="  bg-cover px-2"
              src={certifDesarWeb}
              alt="Certificado Desarrollo Web"
            />
          </div>
          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifTesting}
              alt="Certificado Testing Software"
            />
          </div>
          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifWordpress}
              alt="Certificado Wordpress"
            />
          </div>

          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifGoogle}
              alt="Certificado Google"
            />
          </div>
          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifArgProg}
              alt="Certificado Argentina Programa"
            />
          </div>
          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifHtmlCss}
              alt="Certificado HTML y CSS"
            />
          </div>
          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifJavascript}
              alt="Certificado Javascript"
            />
          </div>

          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifPPF}
              alt="Certificado Primeros Pasos del desarrollo FrontEnd "
            />
          </div>
          <div className="">
            <img
              className=" bg-cover px-2"
              src={certifADDPython}
              alt="Certificado Python"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};
