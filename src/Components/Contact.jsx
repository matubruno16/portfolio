import { motion } from 'framer-motion'
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

export const Contact = () => {
  return (
    <section name='Contact'>
      <div className='bg-Overlay h-[400px] md:h-[500px] bg-cover md:bg-center flex flex-col justify-center items-center'>
        <h5 className=' text-white text-[42px] font-Oswald border-b-[2px] border-b-Blue '>Send Message</h5>
        <motion.a
          whileHover={{scale:1.1}}
          className='mx-auto bg-Blue hover:bg-BlueHover transition-all border-Blue text-white rounded-md px-6 py-2 mt-8 shadow-lg hover:shadow-blue-500/50  duration-500'
          href='mailto:matubruno16@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >Contact me</motion.a>
        <ul className='flex '>
          <li><a href="https://www.facebook.com/matias.bruno19/" rel="noopener noreferrer" target='_blank' ><BsFacebook className='mt-8 text-blue-500 w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4' /></a></li>
          <li><a href="https://www.instagram.com/matubruno16/" rel="noopener noreferrer" target='_blank'><BsInstagram className='mt-8 text-Instagram w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4' /></a></li>
          <li><a href="https://www.linkedin.com/in/matiasbruno19/" rel="noopener noreferrer" target='_blank'><BsLinkedin className='mt-8 text-LinkedIn w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4' /></a></li>
          <li><a href="https://github.com/matubruno16" rel="noopener noreferrer" target='_blank'><BsGithub className='mt-8 text-white w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4' /></a></li>

        </ul>
        <p className='text-white translate-y-16'>© Copyright 2023 <strong>Matias Bruno. </strong>All Rights Reserved </p>
      </div>

    </section>
  )
}
