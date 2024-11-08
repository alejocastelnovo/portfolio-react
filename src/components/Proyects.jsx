import { PROJECTS } from "../constants"
import { motion } from "framer-motion"


const Proyects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, Y:-100}}
                transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Proyectos </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="sm:justify-center mb-8 flex flex-wrap lg:justify-center"> 
                        
                        <motion.div
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:1}}
                        
                        className="p-10 w-full lg:w-1/4">
                        <img src={project.image} 
                        width={400}
                        height={400}
                        alt={project.title} className="mb-6 rounded w-full h-auto object-cover" />
                        </motion.div>

                        <motion.div
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:100}}
                        transition={{duration:1}}
                        
                        className="p-10 w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
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
                            <p className="mb-4 text-neutral-400">{project.description}</p>

                            {project.technologies.map((tech,index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" >{tech}</span>
                            ))}

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proyects