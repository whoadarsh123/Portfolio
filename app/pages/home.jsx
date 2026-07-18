"use client";
import { React } from 'react';
import { GeistPixelGrid } from "geist/font/pixel";
import AdarshIMG from '../images/AdarshIMG.png';
import Image from 'next/image';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AiTools from '../components/AiTools';
import Footer from '../components/Footer';



const home = () => {
  return (
    <div>
      <section className='border-zinc-800 rounded-2xl border min-h-fit md:h-80 bg-zinc-800 p-6 md:p-8 flex flex-col justify-between gap-8 overflow-hidden'>
        <div className='text-white flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0 pointer-events-none w-full'>
          <h1 className="text-zinc-200 font-blackops text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-center">
            ADARSH TRIPATHI
          </h1>
          <div className='h-40 w-50 md:h-52 md:w-62 rounded-full border-[25px] md:border-[26px] border-amber-500 overflow-hidden flex-shrink-0 shadow-2xl relative'>
            <Image
              className='object-cover bottom-15 relative scale-110 object-top'
              src={AdarshIMG}
              alt="Adarsh Tripathi Profile"
            />
          </div>
        </div>
        <div className={`${GeistPixelGrid.className} flex gap-4 md:flex lg:gap-50 md:gap-25 justify-items-center md:justify-center text-sm md:text-base font-mono text-zinc-500`}>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>Works</h2>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>About</h2>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>Contact</h2>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>Experience</h2>
        </div>
      </section>
      <section className='text-white border mt-2 md:mt-5 border-zinc-900 rounded-2xl h-fit bg-zinc-800 p-4 md:p-8'>
        <Projects />
      </section>
      <section className='flex flex-col gap-15 zinc-900 overflow-hidden rounded-2xl border py-15 md:py-20  h-fit bg-zinc-800 mt-2 md:mt-5 px-6 sm:px-8 md:p-10'>
        <Skills />
        <AiTools/>
      </section>
      <section className=' overflow-hidden rounded-2xl border  h-fit bg-zinc-800 mt-2 md:mt-5'>
        <Footer/>
      </section>
    </div>
  )
}

export default home
