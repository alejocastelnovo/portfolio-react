import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/AlejoProfile.jpg";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-6 lg:mb-35">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 px-4 sm:px-8">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="pb-4 text-4xl sm:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16">Alejo Castelnovo</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl tracking-tight text-transparent">Software Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 sm:px-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="Alejo Castelnovo" className="max-w-md rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
