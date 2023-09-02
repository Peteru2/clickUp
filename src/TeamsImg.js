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
import ChatVid from "./chat.mp4"
import ChatImg from "./chat.avif"
import GoalVid from "./goals.mp4"
import GoalImg from "./goals.avif"
import ViewImg from "./views.avif"

import { useState } from "react"
const TeamsImg = () => {

    const [projTask, setProjTask] =  useState(true)
    const [chat, setChat] = useState(false)
    const [goal, setGoal] = useState(false)
    const [view, setView] = useState(false)



    const handleTask = () =>{
        setProjTask(true)
        setChat(false)
        setGoal(false)
        setView(false)


          
    }
    const handleChat = () =>{
        setChat(true);
        setProjTask(false)
        setGoal(false)
        setView(false)



    }
    const handleGoal = () =>{
            setGoal(true)
            setChat(false);
            setProjTask(false)
            setView(false)

    }
    const handleView = () =>{
            setView(true)
            setGoal(false)
            setChat(false);
            setProjTask(false)

    }
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
        <div className="md:bg-rose-50 bg-transparent mt-10 big-round p-0 md:p-12">
            <div className="flex pb-3">
                <h3 className={projTask ? "border-b-4 md:mx-4 mr-4 font-bold pb-1 cursor-pointer hover:border-b-4 border-rose-300":" md:mx-4 mr-4 font-bold pb-1 cursor-pointer hover:border-b-4 border-rose-300"} onClick={handleTask}>Project & Tasks</h3>
                <h3 className={chat ? "border-b-4 mx-4 font-bold   pb-1 cursor-pointer hover:border-b-4 border-rose-300" :" mx-4 font-bold   pb-1 cursor-pointer hover:border-b-4 border-rose-300"} onClick={handleChat}>Chat</h3>
                <h3 className={goal ? "border-b-4 mx-4 font-bold pb-1 cursor-pointer hover:border-b-4 border-rose-300":"mx-4 font-bold pb-1 cursor-pointer hover:border-b-4 border-rose-300"} onClick={handleGoal}>Goals</h3>
                <h3 className={view ? "border-b-4 mx-4 font-bold pb-1 cursor-pointer hover:border-b-4 border-rose-300":"mx-4 font-bold pb-1 cursor-pointer hover:border-b-4 border-rose-300"} onClick={handleView}>Views</h3>
            </div>

            <div className={projTask ? " block grid md:grid-cols-2 grid-col-1 bg-rose-50  gap-4 TaskRound md:bg-transparent p-4 md:p-0 my-4" :"hidden"}>
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
                    <img src={ProjectTaskImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
            </div>

            <div className={chat ?" block grid md:grid-cols-2 grid-col-1 bg-rose-50  gap-4  TaskRound md:bg-transparent p-4 md:p-0 my-4": "hidden"}>
                <div className="md:order-1 order-2 ">
                    <p className="text-3xl font-bold">Bring everyone together in Chat.</p>
                    <p className=" my-4">Work smarter as a team with real-time chat. Tag individuals or groups, assign comments for action items, and link tasks to get more done together.</p>
                    <p className="font-bold my-4">REPLACES:Slack | MS Teams | Google Hangouts</p>
                    <button className="font-bold mt-4 p-4 rounded-md bg-rose-300 text- w-full md:w-32">Get Started</button>
                </div>
                <div className="md:order-2 order-1">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={ChatVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={ChatImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
            </div>

            <div className={goal ?" block grid md:grid-cols-2 grid-col-1 bg-rose-50  gap-4  TaskRound md:bg-transparent p-4 md:p-0 my-4": "hidden"}>
                <div className="md:order-1 order-2 ">
                    <p className="text-3xl font-bold">Set goals and crush them faster.</p>
                    <p className=" my-4">Stay on track to hit your goals with targets for task completions, numbers, monetary values and more. Track progress in real-time connecting tasks to goals and keep your objectives organized with Goal Folders.</p>
                    <p className="font-bold my-4">REPLACES:Lattice | Gtmhub | 7geese</p>
                    <button className="font-bold mt-4 p-4 rounded-md bg-rose-300 text- w-full md:w-32">Get Started</button>
                </div>
                <div className="md:order-2 order-1">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={GoalVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={GoalImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
            </div>

            <div className={view ?" block grid md:grid-cols-2 grid-col-1 bg-rose-50  gap-4  TaskRound md:bg-transparent p-4 md:p-0 my-4": "hidden"}>
                <div className="md:order-1 order-2 ">
                    <p className="text-3xl font-bold">See your work, your way.</p>
                    <p className=" my-4">Tackle work from any angle with 20+ real-time views that adapt to your needs. Track tasks on List, update workflows on a Board, drag-and-drop due dates on a Calendar, and so much more.</p>
                    <p className="font-bold my-4">REPLACES:Monday | Jira | Trello</p>
                    <button className="font-bold mt-4 p-4 rounded-md bg-rose-300 text- w-full md:w-32">Get Started</button>
                </div>
                <div className="md:order-2 order-1">
                   
                    <img src={ViewImg} alt="ProjectImg" className=" mb-4 rounded-lg"/>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default TeamsImg;