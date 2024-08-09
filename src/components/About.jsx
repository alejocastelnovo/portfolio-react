import React from 'react';
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className=" w-full flex flex-col items-center justify-center  ">
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
                    <div className= "flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
