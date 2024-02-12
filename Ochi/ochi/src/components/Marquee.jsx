import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".1"
     className='w-full h-[50vh] py-20 rounded-3xl text-white bg-[#004D43]'>
        <div className='text flex  overflow-hidden border-t-2 border-b-2 border-zinc-300 whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}}  className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed "] uppercase font-bold pr-20 '>I Am Fullstack Developer</motion.h1 >
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}}  className='text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed "] uppercase font-bold pr-20 '>I Am Fullstack Developer</motion.h1 >
        </div>
    </div>
  )
}

export default Marquee