import Navbar from "./Components/Navbar";
// import img from "./clickIcon.png"
import SVG from "./svg";
import Vid1 from "./vid1.webm"
import G2 from "./g2crowd.png"
import getapp from "./getapp.svg"
import capterra from "./capterra.png"
import home from "./homeB.avif"
import TeamsImg from "./TeamsImg";
import Docs from "./Docs";
import SideComment from "./Sidecomment";
import Platform from "./platform";
import Footer from "./Footer";
import CustomerSupport from "./CustomerSupport";
const Landing = () => {
    return ( 
        <>
            <Navbar />
                <section className="LandingMarg  md:mt-32 mt-16 ">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:mx-20 mx-0 ">
                            <div className="md:order-1 order-2">
                                <p className="md:text-7xl text-4xl text-center md:text-left mt-10 font-bold">One app to replace them all.</p>
                                <p className="mt-10 mb-4 hidden md:block">All your work in one place: </p>
                                <div className="md:grid flex md:grid-col-3 nd:block hidden">
                                <p className="flex mx-0">
                                    <p className="mr-2 p-3 shadow-md hover:shadow-lg rounded-md cursor-pointer">Tasks</p>
                                    <p className="mx-2 p-3 shadow-md hover:shadow-lg rounded-md cursor-pointer">Whiteboards</p>
                                    <p className="mx-2 p-3 shadow-md hover:shadow-lg rounded-md">Dashboards</p>

                                </p>
                                <p className="flex md:mt-3 mt-0 ">
                                    <div className="mr-2 p-3 shadow-md hover:shadow-lg rounded-md">Chats</div>
                                    <div className="mx-2 p-3 shadow-md hover:shadow-lg rounded-md">Goals</div>
                                    <div className="mx-2 p-3 shadow-md hover:shadow-lg rounded-md">Docs</div>

                                </p>
                                </div>
                                <div className="md:flex grid grid-cols-1 ml-12 mt-10 md:hidden block">
                                            <p className="my-2"><i className="fa fa-check-circle-o text-green-500"></i> <span className="font-bold text-gray-500 text-sm">Manage tasks, workflows & goals</span></p>
                                            <p className="my-2"><i className="fa fa-check-circle-o text-green-500"></i> <span className="font-bold text-gray-500 text-sm">Collaborate in Docs & Whiteboards</span></p>
                                            <p className="my-2"><i className="fa fa-check-circle-o text-green-500"></i> <span className="font-bold text-gray-500 text-sm">Save time with no code automation </span></p>
                                </div>
                                <div className="mt-6 md:mx-0 mx-6">
                                    <input type="text" placeholder="Enter your work email" className="p-4 md:w-80 w-full border-blue-300 rounded-lg  border-2"/>
                                </div>
                                <div className="mt-5 gap-4 flex">
                                   <p className="bg-purple-600 p-4 shadow-xl font-bold  w-full md:w-32 text-center rounded-md text-white cursor-pointer md:mx-0 mx-6 hover:shadow-lg">Get Started</p>
                                   <p className="text-gray-300 text-sm font-bold mt-2 md:block hidden">FREE FOREVER<br /> NO CREDIT CARD</p>
                                </div>
                                <div className="my-8 md:hidden block">
                                    <img src={home} alt="home"/>
                                </div>
                                <div className="mt-10 w-full justify-center text-center md:text-left">
                                    <p ><i className="fa fa-star text-amber-500 text-sm"></i> <i className="fa fa-star text-amber-500 text-sm"></i> <i className="fa fa-star text-amber-500 text-sm"></i> <i className="fa fa-star text-amber-500 text-sm"></i> <i className="fa fa-star text-amber-500 text-sm"></i> <span className="text-xs"> Based on 10,000+ reviews on</span></p>
                                    <div className="flex  text-center justify-center md:justify-start">
                                        <img src={G2} alt="g2" className="w-16 mr-4" />
                                        <img src={capterra} alt="capterra" className="w-16 mr-4"/>
                                        <img src={getapp} alt="getapp" className="w-16" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:order-2 order-1 md:block hidden">
                          <video autoPlay loop muted playsInline>
                            <source src={Vid1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                            </div>
                    </div>
                    <TeamsImg />
                    <Docs />
                    <Platform />
                    <CustomerSupport />

                    <SVG />
                    <SideComment />
                </section>
                <Footer />
        </>
     );
}
 
export default Landing;