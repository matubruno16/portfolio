import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
export const NavBar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen(!isMenuOpen)
  }
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState('transparent'); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      setScrollPosition(currentScrollPosition)
      if (currentScrollPosition > 600) {
        setNavbarBackground('bg-BackgroundHome')
      } else {
        setNavbarBackground('transparent')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    {
      link: "Home",
      id: 1,
    },
    {
      link: "About",
      id: 2,
    },
    {
      link: "Proyects",
      id: 3,
    },
    {
      link: "Certifications",
      id: 4,
    },
    {
      link: "Services",
      id:5,
    },
    {
      link: "Contact",
      id: 6,
    },
  ]

  return (
    <nav className={['absolute',
      !isMenuOpen
        ? ` ${navbarBackground === 'transparent' ? 'bg-transparent' : ' bg-BackgroundHome'} fixed top-0  w-screen h-[80px] z-[300]`
        : ' h-screen fixed bg-BackgroundHome bg-left-top z-[300] ']}>
      <div className='flex justify-between items-center px-10 xl:px-20 w-screen pt-4 md:pt-0'>
        <a href="" className="text-white font-Oswald text-4xl">Portfolio</a>
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer text-white sm:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className='hidden sm:inline-flex '>
          {!isMenuOpen && links.map(l => (
            <Link
              className='text-white font-Oswald text-lg lg:text-2xl lg:m-6 mx-2 align-middle hover:cursor-pointer border-b
              border-b-transparent hover:border-b hover:border-b-white hover:transition-all duration-200 ease-in-out uppercase active:border-b active:border-b-blue-400'
              smooth={500}
              to={l.link}
              key={l.id}
            >{l.link}</Link>))}
        </div>

      </div>
      {isMenuOpen && links.map(l => (
        <Link
          onClick={() => setMenuOpen(false)}
          className='flex font-Oswald w-min text-white text-3xl mt-10 m-6 hover:cursor-pointer hover:border-b hover:border-b-white hover:transition-all duration-300 uppercase'
          smooth={500}
          to={l.link}
          key={l.id}
        >{l.link}</Link>))}
    </nav>
  )
};
