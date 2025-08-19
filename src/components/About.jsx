import React from 'react';

/* Framer motion para agregarle animaciones a la pagina */
import { motion } from 'framer-motion';

/* Imagen about */
import aboutImg from "../assets/about.jpeg";

/* Import de las constantes para el about y la info */
import { ABOUT_TEXT } from "../constants";

const About = () => {
    const numeroCelu = "543425173294"; 
    const whatsappUrl = `https://wa.me/${numeroCelu}`;
    return (
        <div id="about" className="w-full flex flex-col items-center justify-center">
            <h1 className="my-20 text-center text-4xl">Sobre mi </h1>

            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div>
                        <img className="max-w-sm rounded-full" src={aboutImg} alt="yo" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="my-2 max-w-xl py-6" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center mt-4"
                        >
                            <span>Chatea conmigo en WhatsApp</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
