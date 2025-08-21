import React from 'react';
import logo from "../assets/alejologo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { t } = useLanguage();
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-4 sm:px-8">
            <div className="flex flex-shrink-0 items-center">
                <img className="rounded-md w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 mx-2" src={logo} alt="Alejo Logo"/> 
            </div>

            {/* Navegación interna */}
            <div className="hidden md:flex items-center gap-6 text-sm">
                <button 
                    onClick={() => scrollToSection('projects')}
                    className="hover:text-purple-500 transition duration-300 cursor-pointer"
                >
                    {t.navbar.projects}
                </button>
                <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-purple-500 transition duration-300 cursor-pointer"
                >
                    {t.navbar.about}
                </button>
                <button 
                    onClick={() => scrollToSection('technologies')}
                    className="hover:text-purple-500 transition duration-300 cursor-pointer"
                >
                    {t.navbar.technologies}
                </button>
                <button 
                    onClick={() => scrollToSection('experience')}
                    className="hover:text-purple-500 transition duration-300 cursor-pointer"
                >
                    {t.navbar.experience}
                </button>
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-purple-500 transition duration-300 cursor-pointer"
                >
                    {t.navbar.contact}
                </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-2xl">
                <LanguageToggle />
                <a
                    href="https://www.linkedin.com/in/castelnovoalejo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition duration-300"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="hover:text-purple-500 transition duration-300 text-4xl" />
                </a>
                <a 
                    href="https://github.com/alejocastelnovo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub className="hover:text-purple-500 transition duration-300 text-4xl" />
                </a>
                <a 
                    href="https://www.instagram.com/alecastelnovo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition duration-300"
                    aria-label="Instagram"
                >
                    <FaInstagram className="hover:text-purple-500 transition duration-300 text-4xl"/>
                </a>
            </div>




        </nav>
    );
}

export default Navbar;


