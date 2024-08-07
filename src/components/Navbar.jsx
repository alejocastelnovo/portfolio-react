import logo from "../assets/alejologo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="rounded-md w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 mx-2 " src={logo} alt="Alejo Logo"/> 
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub  />
                <FaInstagram />
            </div>
        </nav>
    );
}

export default Navbar;
