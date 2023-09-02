import DocsVid from "./docs__2_.mp4"
import DocsImg from "./docs (1).avif"
import WhiteVid from "./whiteboard__1_.mp4"
import WhiteImg from "./whiteboard.avif"
import DashVid from "./Dash.webm"
import DashImg from "./Dash.avif"
import "./style.css"
import { useState } from "react"

const Docs = () => {
        const [Docs, setdocs] = useState(true)
        const [White, setwhite] = useState(false)
         const [Dash, setdash] = useState(false)

        const handleDocs = () => {
                setdocs(true)
                setwhite(false)
                setdash(false)
        }
        const handleWhite = ()=>{
            setwhite(true)
            setdash(false)
            setdocs(false)
    }        
        const handleDash = ()=>{
                setdash(true)
                setwhite(false)
                setdocs(false)
        }

    return (
        <>
            <section className="md:bg-gray-100 bg-transparent my-6  md:pt-8 py-0 big-round my-8">
                <div className="flex md:text-center   text-left md:justify-center my-6 font-bold">
                        <p className={Docs ? "mr-8 pb-2 border-b-4  border-blue-400 hover:border-b-4 text-gray-700 cursor-pointer":" cursor-pointer mr-8 pb-2 text-gray-700 border-blue-400 hover:border-b-4"} onClick={handleDocs}>Docs</p>
                        <p className= {White ? "mx-8 pb-2 border-b-4  border-blue-400 hover:border-b-4 text-gray-700 cursor-pointer" :"cursor-pointer text-gray-700 mx-8 pb-2  border-blue-400 hover:border-b-4"} onClick={handleWhite}>Whiteboards</p>
                        <p className= {Dash ? "mx-8 pb-2 border-b-4  border-blue-400 hover:border-b-4 text-gray-700 cursor-pointer" :"cursor-pointer text-gray-700 mx-8 pb-2  border-blue-400 hover:border-b-4"} onClick={handleDash}>Dashboards</p>
                </div>
                <div className={Docs ? "p-2 bg-gray-100 md:bg-transparent DocsRound text-gray-800": "hidden"}>
                    <p className="DocText font-bold text-center">The world's most powerful (and fun) Docs.</p>
                    <div className="DocVid mt-20 rounded-lg">
                    <video autoPlay loop muted playsInline className="m d:rounded-xl md:block hidden">
                            <source src={DocsVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={DocsImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                </div>
                <div className={White ? "p-2 bg-gray-100 md:bg-transparent DocsRound":"hidden"}>
                    <p className="DocText font-bold text-center">Bring your ideas to life with Whiteboards.</p>
                    <div className="DocVid mt-20 rounded-lg">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={WhiteVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={WhiteImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                </div>

                <div className={Dash ? "p-2 bg-gray-100 md:bg-transparent DocsRound":"hidden"}>
                    <p className="DocText font-bold text-center">See how you're doing in real-time with Dashboards.</p>
                    <div className="DocVid mt-20 rounded-lg">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={DashVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={DashImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                </div>
                <div className=" flex flex-wrap justify-center bg-gray-200 Gstated md:mt-20 mt-0 py-6">
                    <p className="p-2 hover:bg-white w-32 rounded-md text-center font-bold">Get Started</p>
                </div>
            </section>
        </>
    );
}
 
export default Docs
