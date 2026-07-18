"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const techStackData = {
  Languages: {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C", icon: "devicon-cplusplus-plain" },
    ]
  },
  Frameworks: {
    title: "Frameworks",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Spring Boot", icon: "devicon-spring-original" },
      { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
    ]
  },
  Tools: {
    title: "Tools",
    items: [
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Postman", icon: "devicon-postman-plain" },
    ]
  },
  Database: {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Supabase", icon: "devicon-supabase-plain" },
    ]
  },
  DevOps: {
    title: "DevOps",
    items: [
      { name: "Azure", icon: "devicon-azure-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ]
  },
};
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -15 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 150, damping: 15 }
  }
};

const Sicons = ({ isHover }) => {
  const matchedKey = Object.keys(techStackData).find(
    (key) => key.toLowerCase() === (isHover || "").toLowerCase()
  ) || "Languages";

  const CurrentCategory = techStackData[matchedKey];

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-3xl select-none relative mx-auto">
      <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
        <h3 className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
          {CurrentCategory.title.replace(/\s+/g, '_').toLowerCase()}
        </h3>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 animate-pulse" />
        </div>
      </div>
      <div style={{ perspective: "1000px" }}>
        <AnimatePresence mode="wait">
          <motion.section
            key={matchedKey}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 "
          >
            {CurrentCategory.items.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: -10,
                  z: 20,
                  backgroundColor: "rgba(24, 24, 27, 0.7)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.7)"
                }}
                whileTap={{ scale: 0.98 }}
                
                className="flex flex-col items-center justify-center gap-4 p-4 md:p-6 bg-zinc-900/30 border border-zinc-900/60 rounded-2xl cursor-pointer transition-colors duration-300 group"
              >

                <div
                  style={{ transform: "translateZ(30px)" }}
    
                  className="w-12 md:w-14 md:h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-xl md:text-3xl shadow-inner text-amber-500 group-hover:text-white transition-colors duration-300"
                >
                  <i className={`${item.icon}`} />
                </div>

                <span
                  style={{ transform: "translateZ(20px)" }}
                  className="font-mono text-[9px] md:text[11px] font-semibold text-zinc-500 tracking-wider group-hover:text-zinc-200 transition-colors duration-300"
                >
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.section>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Sicons;