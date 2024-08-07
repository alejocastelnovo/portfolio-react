import { FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa"
import { RiJavascriptLine, RiReactjsLine, RiRedPacketLine, RiTailwindCssFill } from "react-icons/ri"


const Tecnologias = () => {


    return (
        <div className="border-b border-neutral-800 pb-24 ">
            <h2 className="my-20 text-center text-4xl">Tecnologías</h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-7xl rounded-md bg-yellow-300 text-black" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-800" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-red-800" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-700" />
                </div>

                
            </div>
        </div>
    )
}

export default Tecnologias