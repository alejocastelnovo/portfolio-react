import React from 'react';
import { FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiAngularjsFill, RiAngularjsLine, RiJavascriptLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';

const iconVariants = (duration, delay) => ({
    initial: { y: 0, opacity: 0.5 },
    animate: {
        y: [0, -10, 0], // Mov vertical
        opacity: [0.5, 1, 0.5], // Hace q varie la opacidad
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
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Tecnologías</h2>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial= {{opacity: 0, x: -100 }}
                transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-8">
                <motion.div
                    variants={iconVariants(2.5, 0)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3, 0.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiJavascriptLine className="text-7xl rounded-md bg-yellow-300 text-black" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3, 0.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiAngularjsLine className="text-7xl rounded-md bg-white-700 text-red-700" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5, 0.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaNodeJs className="text-7xl text-green-800" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5, 0.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaHtml5 className="text-7xl text-red-800" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3, 0.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiTailwindCssFill className="text-7xl text-cyan-700" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Tecnologias;
