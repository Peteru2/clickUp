import Booking from "./booking_com.svg"
import IBM from "./ibm.svg"
import Logitch from "./logitech.svg"
import Fortinet from "./fortinet.svg"
import Tibco from "./tibco.svg"
import Spotify from "./spotify_logo_with_text.svg"
import Tmobile from "./t-mobile_logo.svg"
import Netflex from "./netflix.svg"
import ProjectTask from "./projects_tasks.mp4"
import ProjectTaskImg from "./projects_tasks.avif"
const TeamsImg = () => {
    return ( <>
    <section className="bg-gray-100  md:bg-transparent rounded-lg md:p-0 p-5 mt-10">
        <p className="my-8 text-center text-gray-500  font-bold text-sm">JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS</p>
        <div className="md:flex md:flex-row md:flex-wrap grid grid-cols-2 gap-4 w-full  mx-auto    md:justify-center">
                
                        <img src={Booking} alt="booking"  className="w-32 mx-6"/>
                        <img src={IBM} alt="Ibm"  className="w-16 mx-6"/>
                        <img src={Logitch} alt="Logitech"  className="w-16  mt-0.5 mx-6"/>
                        <img src={Fortinet} alt="Fortinet"  className="w-22 mt-0.5 h-4 mx-6 "/>
               
                        <img src={Tibco} alt="Tibco"  className="w-26 mt-0.5 h-4 mx-6"/>
                        <img src={Spotify} alt="Spotify"  className="w-26  mx-6"/>
                        <img src={Tmobile} alt="Tmobile"  className="w-26 mx-6"/>
                        <img src={Netflex} alt="Netflex"  className="w-26  mx-6"/>
                    
               
        </div>
        
        </section>
        <div className="md:bg-rose-50 bg-transparent mt-10 rounded-xl p-0 md:p-12">
            <div className="flex">
                <h3 className="md:mx-4 mr-4 font-bold">Project & Tasks</h3>
                <h3 className="mx-4 font-bold">Chat</h3>
                <h3 className="mx-4 font-bold">Goals</h3>
                <h3 className="mx-4 font-bold">Views</h3>
            </div>

            <div className="grid md:grid-cols-2 grid-col-1 bg-rose-50  gap-4  rounded-lg md:bg-transparent p-4 md:p-0 my-4">
                <div className="md:order-1 order-2 ">
                    <p className="text-3xl font-bold">Simplify work and get more done.</p>
                    <p className=" my-4">Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
                    <p className="font-bold my-4">REPLACES: Asana | Monday | Jira</p>
                    <button className="font-bold mt-4 p-4 rounded-md bg-rose-300 text- w-full md:w-32">Get Started</button>
                </div>
                <div className="md:order-2 order-1">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={ProjectTask} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={ProjectTaskImg} alt="ProjectImg" className="md:hidden block"/>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default TeamsImg;