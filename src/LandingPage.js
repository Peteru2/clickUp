import Navbar from "./Components/Navbar";
import img from "./clickIcon.png"
import SVG from "./svg";

const Landing = () => {
    return ( 
        <>
            <Navbar />
                <section className="mx-14 mt-32">
                    <div className="grid grid-cols-2 mx-10">
                            <div>
                                <p className="text-5xl font-bold">One app to replace them all.</p>
                            </div>
                            <div>
                                <img src={img} alt = "sideImg"  className="mx-20"/>
                            </div>
                    </div>


                    <SVG />
                </section>
        </>
     );
}
 
export default Landing;