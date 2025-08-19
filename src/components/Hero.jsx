import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aleprofile.jpg";
import { motion } from "framer-motion"


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})


const Hero = () => {
    return (
        <div className=" border-neutral-900 pb-16 lg:mb-35">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 px-4 sm:px-8">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-4 text-4xl sm:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16">Alejo Castelnovo</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl tracking-tight text-transparent">Software Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>

                    <motion.div
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center lg:items-start text-center lg:text-left pb-4 ">
                        <h1 className=" py-2  max-w-xl font-light tracking-tighter">Mi Curriculum 👇🏽</h1>

                        <a
                            href="/AlejoCastelnovo_CV.pdf" 
                            download="AlejoCastelnovo_CV.pdf"
                            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-black font-bold py-3 px-6 rounded-full inline-flex items-center mt-1 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            📄 Descargar CV
                        </a>

                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2 px-4 sm:px-8">
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ x: 100, opacity: 0, rotate: 5 }}
                            animate={{ x: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="relative"
                        >
                            {/* Marco decorativo */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                            <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-2 rounded-3xl">
                                <img 
                                    src={profilePic} 
                                    alt="Alejo Castelnovo" 
                                    className="w-80 h-80 object-cover rounded-2xl shadow-1xl" 
                                />
                            </div>
                            {/* Elementos decorativos */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
