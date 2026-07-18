import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react'; // Kept Mail here as a standard vector

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socials = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/aadarsh123/", 
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/whoadarsh123", 
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
    },
    { 
      name: "Twitter", 
      href: "https://x.com/OyeNakull", 
      imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" 
    },
  ];

  const firstName = "ADARSH".split("");
  const lastName = "TRIPATHI".split("");

  return (
    <footer className="relative w-full bg-zinc-800 border-t border-zinc-900 overflow-hidden pt-16 pb-8 px-6 md:px-12">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Header & Download Action */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-zinc-900 pb-12">
          <div className="text-center md:text-left">
            <p className="text-zinc-300 font-bold text-lg">Let's build something exceptional together.</p>
          </div>

          <motion.a 
            href="/resume.pdf"
            download="Adarsh_Tripathi_Resume.pdf"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 text-white font-medium px-6 py-3 rounded-xl cursor-pointer transition-colors"
          >
            <span className="text-sm">Download Resume</span>
            <Download className="w-4 h-4 text-zinc-400" />
          </motion.a>
        </div>

        {/* 🛠️ 2. Dynamic Social Links Using CDN Image Links */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              whileHover={{ y: -4, backgroundColor: "#1f2937" }}
              className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-zinc-800/80 rounded-xl group transition-all duration-300"
            >
              {/* Using a normal image tag targeted at the CDN endpoint */}
              {/* invert brightness-75 makes colored SVGs look clean gray inside a dark UI layout */}
              <img 
                src={social.imgUrl} 
                alt={social.name} 
                className="w-6 h-6 object-contain transition-all duration-300 group-hover:scale-110 invert brightness-75 group-hover:invert-0 group-hover:brightness-100"
              />
            </motion.a>
          ))}

          {/* Optional: Add email button back seamlessly using Lucide layout */}
          <motion.a
            href="mailto:adarshtripathi262@gmail.com"
            whileHover={{ y: -4, backgroundColor: "#1f2937" }}
            className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-zinc-800/80 rounded-xl group transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-zinc-400 group-hover:text-amber-500 transition-colors group-hover:scale-110" />
          </motion.a>
        </div>

        {/* Big Animated Typography Name Container */}
        <motion.div 
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.03 } } }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-wrap justify-center gap-x-6 md:gap-x-8 font-black tracking-tighter text-[11vw] md:text-[8.5vw] text-zinc-900 select-none overflow-hidden leading-none mb-8"
        >
          <div className="flex">
            {firstName.map((letter, i) => (
              <motion.span 
                key={i} 
                variants={{ initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } }} 
                whileHover={{ y: -10, color: "#f59e0b" }}
                className="transition-colors duration-200 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex">
            {lastName.map((letter, i) => (
              <motion.span 
                key={i} 
                variants={{ initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } }}
                whileHover={{ y: -10, color: "#f59e0b" }}
                className="transition-colors duration-200 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Legal & Sub-notes */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600 border-t border-zinc-900/40 pt-8">
          <div>© {currentYear} ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
          </div>
        </div>

      </div>
    </footer>
  );
}