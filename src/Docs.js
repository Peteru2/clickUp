import DocsVid from "./docs__2_.mp4"
import DocsImg from "./docs (1).avif"
import "./style.css"

import { useState } from "react"

const Docs = () => {
        const [Docs, setdocs] = useState(true)
        const [Dash, setdash] = useState(false)

        const handleDocs = () => {
                setdocs(true)
                setdash(false)
        }
        const handleDash = ()=>{
                setdash(true)
                setdocs(false)
        }

    return (
        <>
            <section className="md:bg-gray-100 bg-transparent my-6  md:py-8 py-0 rounded-lg my-8">
                <div className="flex md:text-center   text-left md:justify-center my-6 font-bold">
                        <p className={Docs ? "mr-8 pb-2 border-b-4  border-blue-400 hover:border-b-4":"mr-8 pb-2  border-blue-400 hover:border-b-4"} onClick={handleDocs}>Docs</p>
                        <p className= {Dash ? "mx-8 pb-2 border-b-4  border-blue-400 hover:border-b-4" :" mx-8 pb-2  border-blue-400 hover:border-b-4"} onClick={handleDash}>Whiteboards</p>
                        <p className="mx-8">Dashboards</p>
                </div>
                <div className={Docs ? "p-2 bg-gray-100 md:bg-transparent rounded-lg": "hidden"}>
                    <p className="DocText font-bold text-center">The world's most powerful (and fun) Docs.</p>
                    <div className="DocVid mt-20 rounded-lg">
                    <video autoPlay loop muted playsInline className="m d:rounded-xl md:block hidden">
                            <source src={DocsVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={DocsImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                </div>
                <div className={Dash ? "p-2 bg-gray-100 md:bg-transparent rounded-lg":"hidden"}>
                    <p className="DocText font-bold text-center">Bring your ideas to life with Whiteboards.</p>
                    <div className="DocVid mt-20 rounded-lg">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={DocsVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={DocsImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>

                </div>
            </section>
        </>
    );
}
 
export default Docs
