import Navbar from "./Components/Navbar";
// import img from "./clickIcon.png"
import SVG from "./svg";
import Vid1 from "./vid1.webm"

const Landing = () => {
    return ( 
        <>
            <Navbar />
                <section className="mx-14 mt-32">
                    <div className="grid grid-cols-2 gap-20 mx-20">
                            <div>
                                <p className="text-7xl font-bold">One app to replace them all.</p>
                                
                            </div>
                            <div>
                          <video autoPlay loop muted playsInline>
                            <source src={Vid1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                            </div>
                    </div>


                    <SVG />
                </section>
        </>
     );
}
 
export default Landing;