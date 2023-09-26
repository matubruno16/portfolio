import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certifGoogle from "../assets/Certificate/Certidicado Google Activate Desarrollo Web 1_001.webp"
import certifADDPython from "../assets/Certificate/Certificado analisis de datos con Python_001.webp"
import certifArgProg from "../assets/Certificate/Certificado argentina_programa_2022_001.webp"
import certifDesarWeb from "../assets/Certificate/Certificado Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL_001.webp"
import certifHtmlCss from "../assets/Certificate/Certificado HTML y CSS - OpenBootcamp_001.webp"
import certifJavascript from "../assets/Certificate/Certificado Javascript - OpenBootcamp_001.webp"
import certifPPF from "../assets/Certificate/Certificado Primeros Pasos del Desarrollo FrontEnd TICMAS_001.webp"
import certifTesting from "../assets/Certificate/Certificado Software Testing MasterClass_001.webp"
import certifWordpress from "../assets/Certificate/Certificado Wordpress_001.webp"


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
    <h3 className="text-[50px] uppercase font-bold font-Oswald mt-6 text-center">Certifications</h3>
    <p className="text-center text-sm pb-[40px]">Certificates obtained at different bootcamps</p>
      <div>
        <Slider {...settings}>
          <div className="">
            <img className="  bg-cover px-2" src={certifDesarWeb} alt="Certificado Desarrollo Web"/>
          </div>
          <div className="">
            <img className=" bg-cover px-2" src={certifTesting} alt="Certificado Testing Software"/>
          </div>
          <div className="">
            <img className=" bg-cover px-2" src={certifWordpress} alt="Certificado Wordpress"/>
          </div>
          
          <div className="">
            <img className=" bg-cover px-2" src={certifGoogle} alt="Certificado Google"/>
          </div>
          <div className="">
            <img className=" bg-cover px-2" src={certifArgProg} alt="Certificado Argentina Programa"/>
          </div>
          <div className="">
            <img className=" bg-cover px-2" src={certifHtmlCss} alt="Certificado HTML y CSS"/>
          </div>
          <div className="">
            <img className=" bg-cover px-2" src={certifJavascript} alt="Certificado Javascript"/>
          </div>
          
          <div className="">
            <img className=" bg-cover px-2" src={certifPPF} alt="Certificado Primeros Pasos del desarrollo FrontEnd "/>
          </div>
          <div className="">
            <img className=" bg-cover px-2" src={certifADDPython} alt="Certificado Python"/>
          </div>
         
          
        </Slider>
      </div>
    </section>
  )
}