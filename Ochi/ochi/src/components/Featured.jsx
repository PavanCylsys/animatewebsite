import {  motion,  useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div>
                <div className="cards w-full flex gap-10 mt-10">

                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className=' cardcontainer  relative w-1/2 h-[75vh] '>
                        
                            <h1 className='absolute overflow-hidden flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-8xl'>{"FYDE".split('').map((item, index) => <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.05 }} className='inline-block' >{item}</motion.span>)}</h1>
                            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
                        
                    </motion.div>

                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className=' cardcontainer relative  w-1/2 h-[75vh] '>
                        
                            <h1 className='absolute right-full flex  overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-8xl'>
                                {"VISE".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block' >{item}</motion.span>)}
                            </h1>
                            <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
                        
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Featured