import portfolio from "../assets/projects/project-2.jpg";
import sisgestion from "../assets/projects/project-3.jpg";
import parquepadel from "../assets/projects/parquepadel.jpeg";
import clinica from "../assets/projects/clinica.jpeg"
import romapadel from "../assets/projects/romapadel.png"
import hostease from "../assets/projects/hostease.jpg"
import chatbot from "../assets/projects/chatbot.jpeg"
import padelmanager from "../assets/projects/padelmanager.png"

export const HERO_CONTENT = `Desarrollador de Software. 
Llevo más de 3 años capacitandome y poniendo en practica mis habilidades. Mi enfoque principal ha sido el desarrollo front-end`;

export const ABOUT_TEXT = ` 
Soy Técnico en Desarrollo de Software, tengo 23 años, oriundo de Santa Fe, Argentina.<br /> <br />

Me considero una persona extrovertida que disfruta del trabajo en equipo, lo cual me permite establecer buenas relaciones y aportar valor en cualquier proyecto.<br /> <br />
`;


export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Tecnicatura en Desarrollo de Software",
    description: ` Instituto de Estudios Superiores, Santa Fe`,

  },
  {
    year: "2010-2017",
    role: "Certificacion de Ingles B2",
    description: ` Asociacion Argentina de Cultural Inglesa`,

  },
  {
    year: "2024-2025",
    role: "Certificacion Professional Developer",
    description: ` Digital House`,

  },
  {
    year: "2021-2022",
    role: "Frontend Web Developer Inicial",
    description: `UTN - Buenos Aires`,
    
  },
  {
    year: "2022 - 2024",
    role: "Analisis Tecnico, blockchain, criptomonedas",
    description: `Metamind`,

  },
];

export const PROJECTS = [
  {
    title: "Web Hamburguesería",
    image: parquepadel,
    description:
    "Landing page moderna y responsive para una hamburguesería local. Incluye menú digital, horarios, ubicación y sistema de contacto integrado.",
    technologies: ["React", "JavaScript", "Tailwind"],
    link: "https://parquedehamburguesas.vercel.app/"
  },
  {
    title: "Chatbot IA",
    image: chatbot,
    description:
    "Fork de ChatGPT, usando la API de OpenAI pero personalizado lo maximo posible y configurado para dar consejos, indicaciones, responder dudas acerca de trading.",
    technologies: ["React", "JavaScript", "Tailwind", "Python", "OpenAI"],
    link: "https://trading-chatbot-c2df2.web.app/"
  },
  {
    title: "Web Roma Padel",
    image: romapadel,
    description:
    "Sitio web completo para un complejo de pádel con reservas online, información de canchas, precios y galería de fotos.",
    technologies: ["React", "JavaScript", "Tailwind"],
    link: "https://roma-padel.vercel.app/"
  },
  {
    title: "Padel Manager",
    image: padelmanager,
    description: "Software hecho para un complejo de pádel, con funcionalidades en local. Gestión de turnos, reservas, pagos, etc.",
    technologies: ["React", "JavaScript", "SQLite", "Electron"],
    link: "https://github.com/alejocastelnovo/padel-app"
  },
  {
    title: "Clínica Virtual",
    image: clinica,
    description: "Sistema completo de gestión de turnos médicos con interfaz de usuario intuitiva, base de datos relacional y API REST.",
    technologies: ["Angular", "Node.js", "TypeScript", "MySQL"],
    link: "https://github.com/alejocastelnovo/practicoAngular"
  },
  {
    title: "Sistema de Gestión IES",
    image: sisgestion,
    description:
    "Interfaz administrativa para gestión estudiantil con dashboard, reportes y módulos de usuarios integrados.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/alejocastelnovo/SG-IES"
  },
  {
    title: "Sistema de Alquileres - Hostease",
    image: hostease,
    description:
    "Marketplace completo para gestión de hospedajes con sistema de reservas, pagos, calificaciones y panel de administración.",
    technologies: ["Angular", "TypeScript", "Spring Boot", "Node.js", "MySQL"],
    link: "https://github.com/alejocastelnovo/MarketplaceHostease/tree/main"
  },
  {
    title: "Portfolio Personal",
    image: portfolio,
    description: "Portfolio web responsive con animaciones, filtros por tecnologías y diseño moderno desarrollado con React y Tailwind CSS.",
    technologies: ["React", "Tailwind", "Framer Motion", "JavaScript"],
    link: "https://github.com/alejocastelnovo/portfolio-react"
  },
  
];

export const CONTACT = {
  address: "Coronda, Santa Fe - Argentina ",
  email: "castelnovo12@gmail.com",
  phoneNo: "+54 342 5173294",
};
