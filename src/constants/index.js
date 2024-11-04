import portfolio from "../assets/projects/project-2.jpg";
import sisgestion from "../assets/projects/project-3.jpg";
import parquepadel from "../assets/projects/parquepadel.jpeg";
import clinica from "../assets/projects/clinica.jpeg"


export const HERO_CONTENT = `Desarrollador de Software. 
Llevo más de 3 años capacitandome y poniendo en practica mis habilidades. Mi enfoque principal ha sido el desarrollo front-end`;

export const ABOUT_TEXT = ` 
Tengo 22 años.<br /> <br />
Estoy finalizando la Tecnicatura en Desarrollo de Software<br /> <br />
Aprendo rápidamente, me apasiona la tecnología y siempre busco nuevas oportunidades para seguir capacitandome. <br /> <br />

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
    title: "Clinica Virtual",
    image: clinica,
    description: "Proyecto para gestion de turnos de una clínica.",
    technologies: ["Angular", "Node.js","Typescript", "MySql"],
    link: "https://github.com/alejocastelnovo/practicoAngular"
  },
  {
    title: "Web Hamburguesería",
    image: parquepadel,
    description:
      "Landing page para una hamburgueseria de mi ciudad. ",
    technologies: ["React", "Javascript"],
    link: "https://parquedehamburguesas.vercel.app/"
  },
  {
    title: "Portfolio",
    image: portfolio,
    description: "Mi portfolio personal",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/alejocastelnovo/portfolio-react"
  },
  {
    title: "Sistema de Gestion ",
    image: sisgestion,
    description:
      "Mejoramos la interfaz de usuario del sistema de gestion de nuestro instituto.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/alejocastelnovo/SG-IES"
  },
  
];

export const CONTACT = {
  address: "Coronda, Santa Fe - Argentina ",
  email: "castelnovo12@gmail.com",
  phoneNo: "+54 342 5173294",
};
