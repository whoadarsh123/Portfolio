
import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import Bgimg from '../images/Bgimg.jpg';
import Image from 'next/image';
import Sicons from './Sicons';
const Skills = () => {
  const [isHover, SetIsHover] = useState(null);
  return (
    <div>
      <section className=''>
        <motion.div
        initial={{y:[-20, 0 ,-20] , x:[-10, 0 , -10]}}
        animate={{y:[0, 50, 0] , x:[0 , 50 ,0]}}
        transition={{duration:3, repeat:Infinity}}
         className='relative h-50 w-100 flex items-center justify-center -mt-50 -ml-50'>
          <div className='absolute inset-0 bg-amber-400 blur-2xl rounded-full border-[0.1px] z-0'/>
          <div className='relative z-10 text-zinc-900 font-mono text-xs font-bold whitespace-nowrap'>
          </div>
        </motion.div>
        <div>
          <div className='mb-10'>
            <h1 className='mb-2 text-white relative font-blackops text-4xl md:text-6xl tracking-wide'>Stacks I Use</h1>
            <div className="w-20 h-1 bg-amber-500 rounded" />
          </div>
         <div className='flex'>
          <div className='w-[50%] '>
          <h1 onMouseEnter={()=> SetIsHover("Languages")} onMouseLeave={()=> SetIsHover(null)} className='w-fit text-6xl cursor-pointer   relative font-bold md:text-8xl text-zinc-600 hover:text-amber-400 '>Languages</h1>   
          <h1 onMouseEnter={()=> SetIsHover("Frameworks")} onMouseLeave={()=> SetIsHover(null)}  className='w-fit text-6xl  cursor-pointer relative font-bold md:text-8xl text-zinc-600 hover:text-amber-400 '>Frameworks</h1>   
          <h1 onMouseEnter={()=> SetIsHover("Tools")} onMouseLeave={()=> SetIsHover(null)} className='w-fit text-6xl cursor-pointer  relative font-bold md:text-8xl text-zinc-600 hover:text-amber-400 '>Tools</h1>   
          <h1 onMouseEnter={()=> SetIsHover("Database")} onMouseLeave={()=> SetIsHover(null)} className='w-fit text-6xl  cursor-pointer relative font-bold md:text-8xl text-zinc-600 hover:text-amber-400 '>Databases</h1> 
          <h1 onMouseEnter={()=> SetIsHover("DevOps")} onMouseLeave={()=> SetIsHover(null)} className='w-fit text-6xl  cursor-pointer relative font-bold md:text-8xl text-zinc-600 hover:text-amber-400 '>DevOps</h1>
          </div>
          <div className='p-5 h-full md:h-100  border bg-zinc-950/80 border-zinc-900  shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl rounded-2xl w-[50%]'>
            <Sicons isHover={isHover}/>
          </div>
         </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
