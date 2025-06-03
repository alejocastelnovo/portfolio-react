import portfolio from "../assets/projects/project-2.jpg";
import sisgestion from "../assets/projects/project-3.jpg";
import parquepadel from "../assets/projects/parquepadel.jpeg";
import clinica from "../assets/projects/clinica.jpeg"
import romapadel from "../assets/projects/romapadel.png"
import hostease from "../assets/projects/hostease.jpg"

export const HERO_CONTENT = `Desarrollador de Software. 
Llevo más de 3 años capacitandome y poniendo en practica mis habilidades. Mi enfoque principal ha sido el desarrollo front-end`;

export const ABOUT_TEXT = ` 
Tengo 23 años.<br /> <br />
Soy Técnico en Desarrollo de Software<br /> <br />
Aprendo rápidamente, me interesa la tecnología y siempre busco nuevas oportunidades para seguir capacitandome. <br /> <br />

Me considero entusiasta y disfruto colaborando en equipo, lo que me permite relacionarme bien y contribuir de manera efectiva en cualquier proyecto.
`;


export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Tecnicatura en Desarrollo de Software",
    company: "",
    description: ` Instituto de Estudios Superiores, Santa Fe`,

  },
  {
    year: "2010-2017",
    role: "Certificacion de Ingles B2",
    company: "",
    description: ` Asociacion Argentina de Cultural Inglesa`,

  },
  {
    year: "2021",
    role: "Frontend Web Developer Inicial",
    company: "",
    description: `UTN - Buenos Aires`,
    
  },
  {
    year: "2022 - 2024",
    role: "Analisis Tecnico, blockchain, criptomonedas",
    company: "",
    description: `Metamind`,

  },
];

export const PROJECTS = [
  {
    title: "Web Hamburguesería",
    image: parquepadel,
    description:
    "Landing page para una hamburgueseria de mi ciudad. ",
    technologies: ["React", "Javascript","Tailwind"],
    link: "https://parquedehamburguesas.vercel.app/"
  },
  {
    title: "Web Roma Padel",
    image: romapadel,
    description:
    "Pagina Web para un Complejo de Padel en Coronda ",
    technologies: ["React", "Javascript","Tailwind"],
    link: "https://roma-padel.vercel.app/"
  },
  {
    title: "Clinica Virtual",
    image: clinica,
    description: "Proyecto para gestion de turnos de una clínica.",
    technologies: ["Angular", "Node.js","Typescript", "MySql"],
    link: "https://github.com/alejocastelnovo/practicoAngular"
  },
  {
    title: "Sistema de Gestion ",
    image: sisgestion,
    description:
    "Interfaz Sistema de Gestión IES.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/alejocastelnovo/SG-IES"
  },
  {
    title: "Sistema de Alquilieres",
    image: hostease,
    description:
    "Sistema de gestion de Hospedajes",
    technologies: ["Angular", "TypeScript", "Spring Boot", "Node.js", "MySql"],
    link: "https://github.com/alejocastelnovo/MarketplaceHostease/tree/main"
  },
  {
    title: "Portfolio",
    image: portfolio,
    description: "Link de Github a este portfolio",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/alejocastelnovo/portfolio-react"
  },
  
];

export const CONTACT = {
  address: "Coronda, Santa Fe - Argentina ",
  email: "castelnovo12@gmail.com",
  phoneNo: "+54 342 5173294",
};
