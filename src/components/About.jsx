import aboutImg from "../assets/about.jpeg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Sobre

                <span className="text-neutral-500"> Mi</span>
            </h1>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="items-center justify-center">
                        <img className=" w-1/2 sm:w-2/3 md:w-2/4 lg:w-3/6 rounded-full" src={aboutImg} alt="about" />
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default About