import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';


const Experiencia = () => {
    const { t } = useLanguage();
    
    return (

        <div id="experience" className="border-b border-neutral-900 pb-4">
            <motion.h2
            whileInView={{opacity: 1, y: -1}}
            initial={{opacity: 0, y:-100}}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">{t.experience.title}</motion.h2>

            <div>
                {EXPERIENCES.map((experience, index) => {
                    // Buscar la traducción correspondiente a la experiencia
                    let experienceTranslation = null;
                    
                    // Mapear el rol de la experiencia a la clave de traducción usando un objeto de mapeo
                    const experienceMapping = {
                        "Tecnicatura en Desarrollo de Software": "tecnicatura",
                        "Certificacion de Ingles B2": "ingles",
                        "Certificacion Professional Developer": "digitalHouse",
                        "Frontend Web Developer Inicial": "utn",
                        "Analisis Tecnico, blockchain, criptomonedas": "metamind"
                    };
                    
                    const translationKey = experienceMapping[experience.role];
                    if (translationKey && t.experience.items[translationKey]) {
                        experienceTranslation = t.experience.items[translationKey];
                    }
                    
                    return (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                            {/* Lado izquierdo */}
                            <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{ duration: 1 }}
                            
                            className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">
                                    {experienceTranslation ? experienceTranslation.year : experience.year}
                                </p>
                            </motion.div>

                            {/* Lado derecho con la info */}
                            <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold ">
                                    {experienceTranslation ? experienceTranslation.role : experience.role}.
                                    <span className="text-sm text-purple-100">
                                        {experience.company}
                                    </span>
                                </h6>
                                <p className="mb-4 text-neutral-400">
                                    {experienceTranslation ? experienceTranslation.description : experience.description}
                                </p>

                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experiencia