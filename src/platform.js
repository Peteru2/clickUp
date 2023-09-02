import PlatformVid from "./platform.mp4"
import PlatformImg from "./platform.avif"
const Platform = () => {
    return (
        <>
            <section className="bg-green-50 DocsRound big-round md:pt-10 pt-0">
                <div className="grid md:grid-cols-2 gap-4 grid-cols-1 md:mx-10 mx-6">
                    <div>
                        <p className=" hidden md:block py-4 px-2 rounded-lg bg-green-600 w-20 text-center"><i className="fa fa-file text-white text-2xl"></i></p>

                        <p className="md:mt-12 mt-5 mb-6 text-xs text-green-500 font-bold">THE PLATFORM</p>
                        <p className="text-6xl font-bold w-96">Import to the future of work with one click.</p>
                        <p className="my-10">Instantly import your work from other tools automatically. Create a custom import to bring work in from excel or tools that aren't supported.</p>
                        <div className="grid gap-4 grid-cols-2">
                                <div>
                                    <p className="font-bold xs"><span className="p-1 mr-2 text-center bg-green-400 text-white text-xs rounded-full">01</span> IMPORT</p>
                                     <p className="font-bold text-gray-300 mt-3 xs"><span className="p-1 mr-2 text-center bg-white text-black text-xs rounded-full">03</span> ClICKAPPS</p>
                                     <p className="font-bold text-gray-300 mt-3 xs"><span className="p-1 mr-2 text-center bg-white text-black text-xs rounded-full">05</span> AUTOMATIONS</p>
                                </div>
                                <div>
                                <p className="font-bold text-gray-300 xs"><span className="p-1 mr-2 text-center bg-white text-black text-xs rounded-full">02</span> DOWNLOAD</p>
                                <p className="font-bold text-gray-300 mt-3 xs"><span className="p-1 mr-2 text-center bg-white text-black text-xs rounded-full">04</span> INTEGRATIONS</p>

                                </div>
                        </div>
                    </div>
                    <div className=" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg">
                    <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={PlatformVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <img src={PlatformImg} alt="ProjectImg" className="md:hidden block mb-4 rounded-lg"/>
                </div>
                </div>
                <div className=" flex flex-wrap justify-center bg-green-100 Gstated md:mt-20  py-6">
                    <p className="p-2 hover:bg-white w-32 rounded-md text-center font-bold">Get Started</p>
                </div>
            </section>
        </>
    );
}
 
export default Platform;