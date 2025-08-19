import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { useState, useMemo } from "react"

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTech, setSelectedTech] = useState('all');
    
    // Definir categorías de tecnologías
    const techCategories = {
        'Frontend': ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Framer Motion'],
        'Backend': ['Node.js', 'Spring Boot', 'Python', 'Flask'],
        'Base de Datos': ['MySQL', 'SQLite'],
        'Herramientas': ['Electron', 'OpenAI']
    };
    
    // Obtener todas las tecnologías únicas
    const allTechnologies = useMemo(() => {
        const techs = new Set();
        PROJECTS.forEach(project => {
            project.technologies.forEach(tech => techs.add(tech));
        });
        return Array.from(techs);
    }, []);
    
    // Obtener tecnologías de la categoría seleccionada
    const categoryTechnologies = useMemo(() => {
        if (selectedCategory === 'all') return allTechnologies;
        return techCategories[selectedCategory] || [];
    }, [selectedCategory, allTechnologies]);
    
    // Filtrar proyectos
    const filteredProjects = useMemo(() => {
        if (selectedTech === 'all') return PROJECTS;
        return PROJECTS.filter(project => 
            project.technologies.includes(selectedTech)
        );
    }, [selectedTech]);

    return (
        <div id="projects" className="border-b border-neutral-900 pt-10 pb-4">
            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, Y:-100}}
                transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Proyectos </motion.h2>
            
            {/* Filtros desplegables */}
            <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            >
                {/* Filtro de categoría */}
                <div className="relative">
                    <select
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setSelectedTech('all'); // Resetear tecnología cuando cambia categoría
                        }}
                        className="appearance-none bg-neutral-800 border border-neutral-700 text-neutral-300 px-6 py-3 pr-12 rounded-lg cursor-pointer hover:border-purple-500/50 focus:border-purple-500 focus:outline-none transition-all duration-300 min-w-[180px] text-center"
                    >
                        <option value="all" className="bg-neutral-800 text-neutral-300">
                            🎯 Todas las categorías
                        </option>
                        {Object.keys(techCategories).map((category) => (
                            <option 
                                key={category} 
                                value={category}
                                className="bg-neutral-800 text-neutral-300"
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                    
                    {/* Icono de flecha personalizado */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg 
                            className="w-4 h-4 text-purple-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 9l-7 7-7-7" 
                            />
                        </svg>
                    </div>
                </div>

                {/* Filtro de tecnología */}
                <div className="relative">
                    <select
                        value={selectedTech}
                        onChange={(e) => setSelectedTech(e.target.value)}
                        className="appearance-none bg-neutral-800 border border-neutral-700 text-neutral-300 px-6 py-3 pr-12 rounded-lg cursor-pointer hover:border-purple-500/50 focus:border-purple-500 focus:outline-none transition-all duration-300 min-w-[180px] text-center"
                    >
                        <option value="all" className="bg-neutral-800 text-neutral-300">
                            🚀 Todas las tecnologías
                        </option>
                        {categoryTechnologies.map((tech) => (
                            <option 
                                key={tech} 
                                value={tech}
                                className="bg-neutral-800 text-neutral-300"
                            >
                                {tech}
                            </option>
                        ))}
                    </select>
                    
                    {/* Icono de flecha personalizado */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg 
                            className="w-4 h-4 text-purple-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 9l-7 7-7-7" 
                            />
                        </svg>
                    </div>
                </div>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{opacity:1, y:0}}
                        initial={{opacity:0, y:50}}
                        transition={{duration:0.6, delay: index * 0.1}}
                        className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                        {/* Imagen del proyecto */}
                        <div className="mb-4">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
                            />
                        </div>

                        {/* Contenido del proyecto */}
                        <div>
                            <h6 className="mb-3 text-xl font-semibold">
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-300 transition duration-300 flex items-center gap-2"
                                >
                                    {project.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </h6>
                            
                            <p className="mb-4 text-neutral-400 text-sm leading-relaxed">{project.description}</p>

                            {/* Tecnologías */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech,index) => (
                                <span 
                                    key={index} 
                                    className="rounded bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-400 cursor-help transition-all duration-300 hover:bg-purple-900 hover:text-white border border-neutral-700" 
                                    title={`Tecnología: ${tech}`}
                                    role="tooltip"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects 