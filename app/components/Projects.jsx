"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers, Terminal } from "lucide-react";
import Hospital from '../images/Hospital.png';
import Gympro from '../images/Gympro.png';
import Image from "next/image";



const projects = [
    {
        id: 1,
        title: "MD HOSPITAL SYSTEM",
        subtitle: "HEALTHCARE MANAGEMENT PLATFORM",
        description: "A comprehensive medical administration portal featuring live doctor scheduling, patient dashboard integrations, and automated appointment tracking queues.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        image: Hospital,
        github: "https://github.com/rahulguupta/Hospital-Management-System",
        live: "https://ai-hospital-management-system-ten.vercel.app/",
        icon: Layers
    },
    {
        id: 2,
        title: "AI FITNESS MANAGER",
        subtitle: "INTELLIGENT DEVELOPMENT ENVIRONMENT",
        description: "A cloud-based real-time collaborative workspace designed for programming optimizations, featuring integrated telemetry metrics and terminal state management.",
        tech: ["Next.js", "Express", "Socket.io", "Docker"],
        image: Gympro,
        github: "https://github.com",
        live: "https://example.com",
        icon: Terminal
    }
];

export default function ProjectsSection() {
    return (
        <section className="relative w-ful py-24 px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 space-y-3"
                >
                    <div className="font-mono text-xs text-amber-500 tracking-widest uppercase flex items-center gap-2">
                        <Code2 className="w-4 h-4" /> //ARCHIVE_LOADED
                    </div>
                    <h2 className="font-blackops text-4xl md:text-6xl text-white tracking-wide">
                        Featured Works
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 rounded" />
                </motion.div>
                <div className="space-y-32">
                    {projects.map((project, index) => {
                        const ProjectIcon = project.icon;

                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >


                                <div className="w-full lg:w-1/2 group relative">

                                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                                    <div className="relative border border-zinc-800 bg-zinc-900 rounded-xl overflow-hidden aspect-[16/10] shadow-2xl">
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="w-full h-full relative"
                                        >

                                            <div className="absolute inset-0 bg-zinc-800/50 flex items-center justify-center text-zinc-600 font-mono text-xs">
                                               <Image src={project.image} alt="#"  fill />
                                            </div>

                                        </motion.div>


                                        <div className="absolute top-3 left-3 px-2 py-0.5 bg-zinc-950/80 border border-zinc-800 text-[10px] font-mono text-zinc-400 rounded uppercase tracking-wider">
                                            {project.id}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="space-y-2">
                                        <span className="font-mono text-xs text-amber-500 font-semibold tracking-wider flex items-center gap-2">
                                            <ProjectIcon className="w-3.5 h-3.5" /> {project.subtitle}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold font-sans text-white tracking-tight">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="font-sans text-zinc-400 text-base md:text-lg leading-relaxed bg-zinc-900/40 border border-zinc-900 p-5 rounded-lg backdrop-blur-sm">
                                        {project.description}
                                    </p>


                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-mono text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded hover:border-amber-500/40 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>


                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:border-amber-500 border border-zinc-800 text-zinc-200 rounded-lg font-mono text-sm transition-all hover:text-white"
                                        >
                                            <Code2 className="w-4 h-4" /> CODEBASE
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg font-mono text-sm transition-all shadow-lg shadow-amber-500/10"
                                        >
                                            <ExternalLink className="w-4 h-4" /> LIVE_INTERFACE
                                        </a>
                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}