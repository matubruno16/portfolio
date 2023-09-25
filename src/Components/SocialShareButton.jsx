import { useState } from 'react';
import '../index.css';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram,  FaShareAlt, FaGithub, FaTelegram, } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import { BiLogoNetlify } from 'react-icons/bi'
import { AiOutlineArrowUp } from 'react-icons/ai'


export const SocialShareButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, color: '#1877f2', url:'https://www.facebook.com/matias.bruno19' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, color: '#25d366', url:'https://wa.me/542281470047' },
    { name: 'Gmail', icon: <SiGmail />, color: '#DA4539', url:'mailto:matubruno16@gmail.com' },
    { name: 'Telegram', icon: <FaTelegram />, color: '#0096ED', url:'https://t.me/matubruno16' },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0a66c2', url:'https://www.linkedin.com/in/matiasbruno19' },
    { name: 'Instagram', icon: <FaInstagram />, color: '#c32aa3', url:'https://www.instagram.com/matubruno16' },
    { name: 'Pinterest', icon: <BiLogoNetlify />, color: '#8BE1DF', url:'https://app.netlify.com/teams/matubruno16/overview' },
    { name: 'GitHub', icon: <FaGithub />, color: '#000', url:'https://github.com/matubruno16' },
  ];

  return (
    <>
    <div className={`menu ${isActive ? 'active' : ''}`}>
      <div className="toggle" onClick={toggleMenu}>
        <FaShareAlt />
      </div>
      {socialLinks.map((link, index) => (
        <li key={index} style={{ '--i': index, '--clr': link.color }}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </li>
      ))}
      
    </div>
    <div 
      
      className={`${isActive ? 'hidden' : 'flex flex-col items-center translate-y-[-70px]'}`}>
      <i className="m-4">
        <AiOutlineArrowUp />
      </i>
      <p>Click to contact me</p>
    </div>
    </>
  );
};

