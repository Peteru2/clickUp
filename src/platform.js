import PlatformVid from "./platform.mp4"
import PlatformImg from "./platform.avif"
import ClickAppImg from "./clickapps.avif"
import AutomationImg from "./automations.avif"
import DownloadVid from "./download.mp4"
import DownloadImg from "./download.avif"
import IntegrationImg from "./integration.avif"
import { useState } from "react"
const Platform = () => {
    const [Import, setImport] = useState(true)
    const [Clickapps, setClick] = useState(false)
    const [Automation, setAutomation] = useState(false)
    const [Download, setDownload] = useState(false)
    const [Integration, setIntegration] = useState(false)

    const handleImport=()=>{
        setImport(true)
        setClick(false)
        setAutomation(false)
        setDownload(false)
        setIntegration(false)
    }
    const handleClick=()=>{
        setClick(true)
        setImport(false)
        setAutomation(false)
        setDownload(false)
        setIntegration(false)
    }
    const handleAuto=()=>{
        setAutomation(true)
        setImport(false)
        setClick(false)
        setDownload(false)
        setIntegration(false)
    }
    const handleDownload=()=>{
        setDownload(true)
        setAutomation(false)
        setImport(false)
        setClick(false)
        setIntegration(false)
    }
    const handleIntegration=()=>{
        setIntegration(true)
        setDownload(false)
        setAutomation(false)
        setImport(false)
        setClick(false)
    }
    const  DaStyles = [
       " p-1",
       " mr-2",
       "text-center", 
       "bg-green-400", 
       "text-white",
       "text-xs",
       "rounded-full",
       "cursor-pointer"
    ]
    const DaStyles2 = [
        "p-1",
        "mr-2",
        "text-center",
        "bg-white",
        "text-black", 
        "text-xs", 
        "rounded-full",
        "cursor-pointer"
    ]
    return (
        <>
         <div className="flex pl-2 mt-4 overflow-x-scroll platMobileClicks">
                    

             
                    <p className={Import ? "font-bold text-gray-700 mr-5 pb-1 border-b-4 border-green-500  text-black cursor-pointer" :" border-green-500 hover:border-b-4 font-bold  text-gray-700 mr-5 cursor-pointer "} onClick={handleImport}> Import</p>
                     <p className={ Clickapps ? "font-bold text-gray-700 mr-5 pb-1 border-b-4 border-green-500  text-black cursor-pointer":"font-bold  text-gray-700 mr-5 cursor-pointer border-green-500 hover:border-b-4"} onClick={handleClick}> Clickapps</p>
                     <p className={ Automation ? "font-bold text-gray-700 mr-5 pb-1 border-b-4 border-green-500  text-black cursor-pointer":"font-bold  text-gray-700 mr-5 cursor-pointer border-green-500 hover:border-b-4"} onClick={handleAuto}> Automations</p>
                
                <p className={Download ? "font-bold text-gray-700 mr-5 pb-1 border-b-4 border-green-500  text-black cursor-pointer":"font-bold  text-gray-700 mr-5 cursor-pointer border-green-500 hover:border-b-4"} onClick={handleDownload}> Download</p>
                <p className={ Integration ? "font-bold text-gray-700 mr-5 pb-1 border-b-4 border-green-500  text-black cursor-pointer":"font-bold  text-gray-700 mr-5 cursor-pointer border-green-500 hover:border-b-4"} onClick={handleIntegration}>Integration</p>

                
</div>
            <section className="bg-green-50 DocsRound big-round mb-20 md:pt-10 pt-0">
               
                <div className="grid md:grid-cols-2 gap-4 grid-cols-1 md:mx-10 mx-6">
                    <div className="order1">
                   <p className=" hidden md:block py-4 px-2 rounded-lg bg-green-600 w-20 text-center cursor-pointer"><i className="fa fa-clone text-white text-2xl"></i></p>
                    <p className="md:mt-12 mt-5 mb-6 text-xs text-green-500 font-bold">THE PLATFORM</p>
                        <div className={Import ? "block" : "hidden"}>                        
                    
                        <p className="md:text-6xl text-3xl font-bold md:w-96 w-80 ">Import to the future of work with one click.</p>
                        <p className="my-10">Instantly import your work from other tools automatically. Create a custom import to bring work in from excel or tools that aren't supported.</p>
                        </div>
                        <div className={Clickapps ? "block" : "hidden"}>                        
                       
                        <p className="md:text-6xl text-3xl font-bold md:w-96 w-80 ">Customize tasks for any need.</p>
                        <p className="my-10">Customize ClickUp to tackle any project or task with 35+ ClickApps. Break down work with subtasks, assign Sprint Points, link tasks to other items with Relationships, and more.
                        </p>
                        </div>
                        <div className={Automation ? "block" : "hidden"}>                        
                       
                       <p className="md:text-6xl text-3xl font-bold md:w-96 w-80 ">Save time by automating your work.</p>
                       <p className="my-10">Eliminate the busywork and focus on what matters with hundreds of Automations. Automatically assign tasks, post comments, update statuses, and sync with other tools.
                       </p>
                       </div>

                        <div className={Download ? "block" : "hidden"}>                        
                        <p className="md:text-6xl text-3xl font-bold md:w-96 w-80 ">Get more work done, wherever you are.</p>
                        <p className="my-10">Access ClickUp on any device—mobile, desktop, voice assistants, and more to get work done from anywhere.
                        </p>
                       </div>
                        <div className={Integration ? "block" : "hidden"}>                        
                            <p className="md:text-6xl text-3xl font-bold md:w-96 w-80 ">Bring all of your tools into one place.</p>
                            <p className="my-10">If you're not ready to replace all your tools, ClickUp can integrate with them through native and third-party integrations. Sync your team calendars, messaging apps, cloud storage, and more to keep everything in one place.
                            </p>
                       </div>
                        <div className="grid gap-4 grid-cols-2 platDesktopClicks">
                                <div>
                                    <p className={Import ? "font-bold xs text-black cursor-pointer" :"font-bold xs cursor-pointer text-gray-300"} onClick={handleImport}><span className={Import ? `${DaStyles.join(" ")}` : `${DaStyles2.join(" ")}`} >01</span> IMPORT</p>
                                     <p className={ Clickapps ? "font-bold text-black mt-3 xs cursor-pointer":"font-bold text-gray-300 mt-3 xs cursor-pointer"} onClick={handleClick}><span className={ Clickapps ? `${DaStyles.join(" ")}`: `${DaStyles2.join(" ")}` }>03</span> ClICKAPPS</p>
                                     <p className={ Automation ? "font-bold text-black mt-3 xs cursor-pointer":"font-bold text-gray-300 mt-3 xs cursor-pointer"} onClick={handleAuto}><span className={ Automation ? `${DaStyles.join(" ")}`: `${DaStyles2.join(" ")}` }>05</span> AUTOMATIONS</p>
                                </div>
                                <div>
                                <p className={Download ? "font-bold text-black xs cursor-pointer":"font-bold text-gray-300 xs cursor-pointer"} onClick={handleDownload}><span className={ Download ? `${DaStyles.join(" ")}`: `${DaStyles2.join(" ")}` }>02</span> DOWNLOAD</p>
                                <p className={ Integration ? "font-bold text-black mt-3 xs cursor-pointer":"font-bold text-gray-300 mt-3 xs cursor-pointer"} onClick={handleIntegration}><span className={ Integration ? `${DaStyles.join(" ")}`: `${DaStyles2.join(" ")}` }>04</span> INTEGRATIONS</p>

                                </div>
                        </div>
                    </div>
                    <div className={Import ?" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg order2 block":"hidden"}>
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={PlatformVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={PlatformImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                <div className={Clickapps ?" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg order2 block ":"hidden"}>
                   
                    <img src={ClickAppImg} alt="ProjectImg" className="block mb-4 rounded-lg"/>
                </div>
                <div className={Automation ?" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg order2 block ":"hidden"}>
                   
                   <img src={AutomationImg} alt="ProjectImg" className="block mb-4 rounded-lg"/>
               </div>
               <div className={Download ?" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg order2 block":"hidden"}>
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={DownloadVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={DownloadImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                <div className={Integration ?" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg order2 block ":"hidden"}>
                   
                   <img src={IntegrationImg} alt="ProjectImg" className="block mb-4 rounded-lg"/>
               </div>
                </div>
                <div className=" flex flex-wrap justify-center bg-green-100 Gstated md:mt-20  py-6">
                    <p className="p-2 hover:bg-white w-38 rounded-md text-center font-bold">Get Started <i className="fa fa-long-arrow-right ml-1 text-green-500"></i></p>
                </div>
            </section>
        </>
    );
}
 
export default Platform;