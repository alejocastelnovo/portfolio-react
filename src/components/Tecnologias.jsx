import React from 'react';
import { FaDocker, FaGithub, FaNodeJs, FaFire } from "react-icons/fa";
import {RiAngularjsLine, RiJavascriptLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration, delay) => ({
    initial: { y: 0, opacity: 0.5 },
    animate: {
        y: [0, -15, 0], // Mov vertical
        opacity: [0.5, 1], // Hace q varie la opacidad
        transition: {
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay, // para coordinar las animaciones
        },
    },
});

const Tecnologias = () => {
    return (
        <div id="technologies" className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 border-b border-neutral-800 pb-16 sm:pb-24">
            <h2 className="my-12 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl px-4">Tecnologías y Herramientas</h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full px-4">

                {/* Icono React */}
                <motion.div
                    variants={iconVariants(2.5, 0)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <RiReactjsLine className="text-3xl sm:text-4xl lg:text-6xl text-cyan-400" />
                </motion.div>

                {/* Icono Javascript */}
                <motion.div
                    variants={iconVariants(3, 0.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <RiJavascriptLine className="text-3xl sm:text-4xl lg:text-6xl rounded-md bg-yellow-300 text-black" />
                </motion.div>

                {/* Icono Angular */}
                <motion.div
                    variants={iconVariants(3, 0.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <RiAngularjsLine className="text-3xl sm:text-4xl lg:text-6xl rounded-md bg-white-700 text-red-700" />
                </motion.div>

                {/* Icono Node */}
                <motion.div
                    variants={iconVariants(2.5, 0.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <FaNodeJs className="text-3xl sm:text-4xl lg:text-6xl text-green-800" />
                </motion.div>

                {/* Icono Docker */}
                <motion.div
                    variants={iconVariants(2.5, 0.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <FaDocker className="text-3xl sm:text-4xl lg:text-6xl text-cyan-700" />
                </motion.div>

                {/* Icono Git */}
                <motion.div
                    variants={iconVariants(2.5, 0.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <FaGithub className="text-3xl sm:text-4xl lg:text-6xl text-white" />
                </motion.div>

                {/* Icono Tailwind */}
                <motion.div
                    variants={iconVariants(3, 0.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <RiTailwindCssFill className="text-3xl sm:text-4xl lg:text-6xl text-cyan-700" />
                </motion.div>

                {/* Icono Firebase */}
                <motion.div
                    variants={iconVariants(3, 0.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                    <FaFire className="text-3xl sm:text-4xl lg:text-6xl text-red-700" />
                </motion.div>

                                {/* Icono Typescript */}
                <motion.div
                    variants={iconVariants(2.5, 0.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-neutral-800 p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                        <SiTypescript className="text-3xl sm:text-4xl lg:text-6xl text-blue-700" />
                </motion.div>


            </motion.div>


        </div>



    );
};

export default Tecnologias;
