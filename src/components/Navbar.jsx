import React from 'react';
import logo from "../assets/alejologo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-4 sm:px-8">
            <div className="flex flex-shrink-0 items-center">
                <img className="rounded-md w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 mx-2" src={logo} alt="Alejo Logo"/> 
            </div>

            <div className="flex items-center justify-center gap-4 text-2xl">
    <a 
        href="www.linkedin.com/in/castelnovoalejo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition duration-300"
    >
        <FaLinkedin />
    </a>
    <a 
        href="https://github.com/alejocastelnovo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition duration-300"
    >
        <FaGithub />
    </a>
    <a 
        href="https://www.instagram.com/alecastelnovo/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition duration-300"
    >
        <FaInstagram />
    </a>
</div>




        </nav>
    );
}

export default Navbar;


{/*             <div className="flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin className="hover:text-cyan-300 transition duration-300" />
                <FaGithub className="hover:text-cyan-300 transition duration-300" />
                <FaInstagram className="hover:text-cyan-300 transition duration-300" />
            </div> */}