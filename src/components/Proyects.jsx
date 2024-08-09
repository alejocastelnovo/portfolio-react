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
                        width={250}
                        height={250}
                        alt={project.title} className= "  mb-6 rounded" />
                        </motion.div>


                        <motion.div
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:100}}
                        transition={{duration:1}}
                        
                        className="p-10 w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className= "mb-4 text-neutral-400">{project.description}</p>
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