import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from '../assets/images/logo.webp'

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      if (currentScrollPosition > 600) {
        setNavbarBackground("bg-BackgroundHome");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      link: "Inicio",
      id: 1,
    },
    {
      link: "Sobre Mi",
      id: 2,
    },
    {
      link: "Proyectos",
      id: 3,
    },
    {
      link: "Certificaciones",
      id: 4,
    },
    {
      link: "Servicios",
      id: 5,
    },
    {
      link: "Contacto",
      id: 6,
    },
  ];

  return (
    <nav
      className={[
        "",
        !isMenuOpen
          ? ` ${
              navbarBackground === "transparent"
                ? "bg-transparent"
                : " bg-BackgroundHome"
            } fixed w-screen h-[61px] z-[300] `
          : " h-screen fixed bg-BackgroundHome bg-left-top z-[300] ",
      ]}
    >
      <div className="flex justify-between items-center px-10 xl:px-20 w-screen pt-2 lg:pt-0">
        <a
          href="https://matubruno16.github.io/portfolio"
        >
          <img 
            className="w-[200px] lg:w-[270px] m-2"
            src={Logo} 
            alt="Logo Matias Bruno" />
        </a>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 cursor-pointer text-white md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="hidden md:inline-flex ">
          {!isMenuOpen &&
            links.map((l) => (
              <Link
                className="text-white font-Oswald  lg:text-xl m-1 lg:m-2 xl:m-4 align-middle hover:cursor-pointer border-b
              border-b-transparent hover:border-b hover:border-b-white hover:transition-all duration-200 ease-in-out uppercase active:border-b active:border-b-blue-400"
                smooth={500}
                to={l.link}
                key={l.id}
              >
                {l.link}
              </Link>
            ))}
        </div>
      </div>
      {isMenuOpen &&
        links.map((l) => (
          <Link
            onClick={() => setMenuOpen(false)}
            className="flex w font-Oswald max-w-max text-white text-3xl mt-10 my-6 ml-6 hover:cursor-pointer
             hover:border-b-4 hover:border-b-white hover:transition-all duration-300 uppercase"
            smooth={500}
            to={l.link}
            key={l.id}
          >
            {l.link}
          </Link>
        ))}
    </nav>
  );
};
