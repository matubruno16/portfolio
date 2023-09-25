import { CardService } from "./CardService"
import { FaDesktop } from 'react-icons/fa'
import { AiOutlineDeploymentUnit, AiOutlineMobile } from 'react-icons/ai'
import { motion } from "framer-motion"

export const Services = () => {
  return (
    <section name='Services' className='xl:w-[80%] w-[95%] mx-auto h-auto my-20'>
      <h3 className="text-[50px] uppercase font-bold font-Oswald mt-6 text-center">Services</h3>
      <p className="text-center text-sm pb-[40px]">Professional web development: design, programming and maintenance of sites</p>

      <motion.div 
        initial={{y: 100}}
        animate={{y: 0}}
        transition={{duration:1.1}}
        className='grid grid-cols-1 gap-x-[20px] gap-y-[40px] p-[10px]  lg:grid-cols-3 place-items-center gap-4 '>
        <CardService
          icon={<FaDesktop style={{ color: 'hsl(225,15%,40%)%)', fontSize: '54px' }} />}
          titleService='Web design'
          descriptionService="Good web design can increase a company's visibility and credibility, while improving the user experience and converting visitors into customers. It is essential for any company that wants to succeed in the digital market."
        />
        <CardService
          icon={<AiOutlineDeploymentUnit style={{ color: 'hsl(225,15%,40%)%)', fontSize: '54px' }} />}
          titleService='WEB DEVELOPMENT'
          descriptionService="It is a fundamental service for creating functional and effective websites. A web development team can create a customized website, integrating advanced technologies and features to improve user experience and site efficiency."
        />
        <CardService
          icon={<AiOutlineMobile style={{ color: 'hsl(225,15%,40%)%)', fontSize: '54px' }} />}
          titleService='RESPONSIVE DESIGN'
          descriptionService="A responsive website improves user experience, increases dwell time and reduces bounce rate. In addition, search engines (Google, Bin, etc.) favor responsive websites, which improves organic positioning."
        />
      </motion.div>

    </section>
  )
}
