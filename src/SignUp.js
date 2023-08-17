import img from "./clickIcon.png"
import "./style.css"
import { Link } from "react-router-dom"

const SignUp = () => {
    return ( 
        <section className="bg-gray-100 logBody">
         <nav className="flow-root flex group mb-14   md:mb-10  w-full columns-2  px-7 py-6 my-1">
       
       <div className="float-left flex">

        <img src={img} className=" w-8 ml-0" alt="Home" />
        <h2 className="font-bold ml-1 text-3xl">Click Up  </h2>
        
       </div>
      
       <ul className="float-right flex">
         <div  className="flex">          
        
         <li className=" hidden md:block px-2 py-2 mt-3 mr-4 rounded-lg">Already playing with ClickUp?</li>
    
        <li className="   px-3 py-2 mt-3 rounded-lg bg-blue-600 text-white shadow-blue-300 shadow-xl"><Link to={"./Login"}>Login</Link></li>
         </div>
         
 
       </ul>
     </nav>

     <div className=" flex justify-center items-center ">
      <div className="bg-white px-10 pt-10 pb-5 md:px-16 md:pt-16 md:pb-0  w-44 rounded-tr-xl rounded-tl-xl shadow-md loginForm ">
        <h2 className="text-3xl font-bold mb-6 text-center">Lets Go!</h2>
        <form>
          <div className="mb-4">
          <label className="my-5 ">Full Name</label>
            <div className="flex items-center border rounded-xl px-3 mt-4 py-2">
            <i className="fa fa-user w-5 h-5 text-gray-400 mr-2 mt-1"></i>
              <input type="text" className="w-full outline-none" placeholder="John Doe" />
            </div>
          </div>
          <div className="mb-4">
          <label className="my-5 ">Email</label>
            <div className="flex items-center border rounded-xl px-3 mt-4 py-2">
            <i className="fa fa-envelope w-5 h-5 text-gray-400 mr-2 mt-1"></i>
              <input type="text" className="w-full outline-none" placeholder="example@site.com" />
            </div>
          </div>
          <div className="mb-6">
          <label className="my-5">Choose Password   </label>
            <div className="flex items-center border rounded-xl px-3 mt-4 py-2">
            <i className="fa fa-lock w-5 h-5 text-gray-400 mr-2 mt-1"></i>
              <input type="password" className="w-full outline-none" placeholder="Minimum 8 characters" />
              <p className="logForgot text-blue-600 flex">Show</p>
            </div>
          </div >
          <button className="bg-blue-600 hover:bg-blue-600 shadow-blue-500 shadow-2xl text-white font-semibold py-4 px-4 rounded w-full">Play with ClickUp</button>
          <p className="text-center mt-6 sso">or signup with SSO</p>
         
        </form>
      
        
      </div>
    </div>
    <div className="justify-center items-center flex ">
    <p className="text-center   py-2 text-gray-500 logTerms bg-gray-50 rounded-br-xl rounded-bl-xl ">By clicking the button above, you aggree to our <b className="">Terms of Service</b> and <b>Privacy Policy</b></p>
    </div>
    
    <div className="asideBox  font-bold">
      <p className="border-2 text- rounded-md mx-4">?</p>
      <p>Help</p>
    </div>
    <div className="logDetail">
    <p className="mt-8 text-white">
    <span className="samsung mr-10">SAMSUNG</span>
        
        <span className="booking mr-10">Booking.com</span>
        <span className="ibm mr-10">IBM</span>
        <span className="padres">PADRES</span>


        
    </p>

   
    <p className="mt-2 md:mt-8 recaptcha hidden md:block md:p-0 text-gray-200 logfooter">See why 1,000,000+ teams are more productive with ClickUp.</p>
    </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"  preserveAspectRatio="none" style={{ position: "absolute", top:392, left: 0, width: "100%", height: "66%" }}>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "rgb(37 99 235)", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "rgba(192, 38, 211,.7)", stopOpacity: 1 }} />
    </linearGradient>
    <pattern id="dots-pattern" width="4" height="3" patternUnits="userSpaceOnUse" >
      <circle cx="1" cy="2" r="0.4" fill="rgba(0,0,0,.2)"  />
    </pattern>
  </defs>
  <path d="M0,80 Q0,10 70,1 H70 Q95,0 100,20 V100 H0 Z" fill="url(#grad1)" />

  <rect x="8" y="15" width="100%" height="100%" fill="url(#dots-pattern)" />
</svg>
        </section>
     );
}
 
export default SignUp;
