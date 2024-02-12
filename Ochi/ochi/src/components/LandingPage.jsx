import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {


  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstrcture mt-52 px-20'>
            {["I Create", "Fullstack","Web application"].map((item,index)=> {
                return <div className='masker' >
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index===1 && (
                        <motion.div 
                        initial={{width:0}} 
                        animate={{width:"9vw"}} 
                        transition={{ease:[0.76,0,0.24,1],duration:1}} className='mr-[1vw] w-[9vw] rounded-md h-[6vw]  relative bg-red-400'></motion.div>)}
                <h1 className=' pt-[1vw]  mb-[1vw] uppercase text-[5vw] h-full leading-[.98] font-["Founders_Grotesk_X-Condensed "] font-bold'> {item}</h1>
            </div>
            </div>
            })}
        
        </div>
        <div className='border-t-[1px] bor border-zinc-800 flex mt-20 justify-between items-center py-5 px-20'>
            {["For Public and  companies" ,"from the first pitch to IPO"].map((item,index)=>
                <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
            )}
            <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] font-light text-md uppercase border-zinc-400 rounded-full'>start the project</div>
        <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong></FaArrowUpLong>
            </span>
        </div>
        </div>
        </div>
         
    </div>
  )
}

export default LandingPage