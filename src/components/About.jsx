import React from 'react';
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className=" w-full flex flex-col items-center justify-center  ">
            <h1 className="my-20 text-center text-4xl">Sobre mi </h1>
            <div className="flex flex-wrap items-center justify-center w-full">
                <div className="w-full lg:w-1/2 p-4 sm:p-8 flex justify-center lg:justify-start">
                    <img className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 rounded-full" src={aboutImg} alt="about" />
                </div>
                <div className="w-full lg:w-1/2 p-4 sm:p-8 flex justify-center lg:justify-start">
                <div dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
                </div>
            </div>
        </div>
    );
};

export default About;
