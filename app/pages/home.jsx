"use client";
import { React, useState, useEffect } from 'react';
import { GeistPixelGrid } from "geist/font/pixel";
import AdarshIMG from '../images/AdarshIMG.png';
import Image from 'next/image';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AiTools from '../components/AiTools';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';



const home = () => {


  // usestate for role cycling
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  const ROLES = ["Developer", "Engineer", "Architect", "Creator"];
  const EASE = [0.22, 1, 0.36, 1];


  return (
    <div>
      <section className='border-zinc-800 rounded-2xl border min-h-screen md:h-80 bg-zinc-800 p-6 md:p-8 flex flex-col justify-between gap-8 overflow-hidden'>
        <div className="relative z-10 flex items-center justify-between border-b border-zinc-800/70 px-5 py-3.5 md:px-8">
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, }}
            className="font-mono text-xs sm:text-sm text-zinc-500"
          >
            ⟨/⟩ ADARSH<span className="text-amber-500">.TRIPATHI</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden items-center gap-2 font-mono text-xs sm:flex text-zinc-500"
          >
            <span className="relative flex h-1.5 w-1.5">
              <motion.span
                animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-emerald-400"
              />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            OPEN TO WORK · IND / FULL STACK DEVELOPER
          </motion.span>
        </div>
        <div className='text-white flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0 pointer-events-none w-full'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-wide text-zinc-100 sm:text-6xl md:text-7xl xl:text-8xl"
          >
            ADARSH TRIPATHI
          </motion.h1>
          <motion.div className='relative border-[10px] border-amber-800 rounded-full p-1 md:p-2 bg-zinc-900'>
            {/* rotating border effect over outer border */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, ease: "linear", repeat: Infinity }}
              className="pointer-events-none absolute -inset-[10px] z-10 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg 210deg, #d97706 260deg 315deg, #fbbf24 340deg 360deg, transparent 360deg)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 13px), #000 calc(100% - 8px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 13px), #000 calc(100% - 8px))",
              }}
            />
            {/* thin rotating border effect over outer border */}
            <motion.div
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 4.8, ease: "linear", repeat: Infinity }}
              className="pointer-events-none absolute -inset-[15px] z-10 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg, transparent 0deg 300deg, rgba(120, 53, 15, 0.95) 345deg 360deg)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3.5px), #000 calc(100% - 1px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3.5px), #000 calc(100% - 1px))",
              }}
            />
            <div className='h-50 w-50 md:h-52 md:w-52 rounded-full border-[10px] md:border-[10px] border-amber-500 overflow-hidden flex-shrink-0 shadow-2xl relative'>
              <Image
                className='object-cover  bottom-15 relative scale-110 object-top'
                src={AdarshIMG}
                alt="Adarsh Tripathi Profile"
              />
            </div>
            {/* available badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
              className="absolute -bottom-1 -right-1 z-20 flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 rounded-full px-3 py-1.5"
              style={{ boxShadow: "0 0 0 0 rgba(52, 211, 153, 0.4)" }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-medium">Available</span>
            </motion.div>
            {/* full stack badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 300 }}
              className="absolute -top-2 -left-3 z-20 flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1.5"
            >
              <span className="text-xs font-mono text-amber-400 font-medium">Full Stack</span>
            </motion.div>

          </motion.div>
        </div>

        <div className={`${GeistPixelGrid.className} flex gap-4 md:flex lg:gap-50 md:gap-25 justify-items-center md:justify-center text-sm md:text-base font-mono text-zinc-500`}>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>Works</h2>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>About</h2>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>Contact</h2>
          <h2 className='hover:text-amber-400 cursor-pointer transition-colors duration-200 w-full text-center md:w-auto'>Experience</h2>
        </div>
      </section>
      <section className='text-white border mt-2 md:mt-5 border-zinc-900 rounded-2xl h-fit bg-zinc-800 p-2 md:p-8'>
        <Projects />
      </section>
      <section className='flex flex-col gap-15 zinc-900 overflow-hidden rounded-2xl border py-15 md:py-20  h-fit bg-zinc-800 mt-2 md:mt-5 px-6 sm:px-8 md:p-10'>
        <Skills />
        <AiTools />
      </section>
      <section className=' overflow-hidden rounded-2xl border  h-fit bg-zinc-800 mt-2 md:mt-5'>
        <Footer />
      </section>
    </div>
  )
}

export default home
