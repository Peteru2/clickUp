import DocsVid from "./docs__2_.mp4"
import DocsImg from "./docs (1).avif"

const Docs = () => {
    return (
        <>
            <section className="bg-gray-100 p-2 rounded-lg my-8">
                <div className="flex text-center justify-center my-4 font-bold">
                        <p className="mx-8">Docs</p>
                        <p className="mx-8">Whiteboards</p>
                        <p className="mx-8">Dashboards</p>
                </div>
                <div>
                    <p className="text-center text-5xl my-4 font-bold flex justify-center">See how you're doing in real-time with Dashboards.</p>
                    <div className="md:mx-60 mx-10 m rounded-lg">
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
