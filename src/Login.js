import img from "./clickIcon.png"
import "./style.css"
import { Link } from "react-router-dom"

const Login = () =>{
    return(
        <section className="bg-gray-100 logBody">
         <nav className="flow-root flex group mb-16   md:mb-10  w-full columns-2  px-7 py-6 my-1">
       
       <div className="float-left flex">

        <img src={img} className=" w-8 ml-0" alt="Home" />
        <h2 className="font-bold ml-1 text-2xl md:text-3xl ">Click Up  </h2>
        
       </div>
      
       <ul className="float-right flex">
         <div  className="flex">          
        
         <li className=" hidden md:block px-2 py-2 mt-3 mr-4 rounded-lg">Don't have an account?</li>
    
        <li className="   px-3 py-2 mt-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-blue-300 shadow-xl"><Link to={"./SignUp"}>Sign Up</Link></li>
         </div>
         
 
       </ul>
     </nav>

     <div className=" flex flex-wrap justify-center items-center ">
      <div className="bg-white px-10 pt-10 pb-6 md:px-16 md:pt-16 md:pb-7  w-44 rounded-xl shadow-md loginForm ">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
        <form>
          <div className="mb-6">  
          <label className="my-5 label">Email</label>
            <div className="flex items-center border rounded-xl px-3 mt-1 py-2">
            <i className="fa fa-envelope w-5 h-5 text-gray-400 mr-2 mt-1"></i>
              <input type="text" className="w-full outline-none" placeholder="Email" />
            </div>
          </div>
          <div className="mb-6">
          <label className="my-5 label">Password   </label>
            <div className="flex items-center border rounded-xl px-3 mt-1 py-2">
            <i className="fa fa-lock w-5 h-5 text-gray-400 mr-2 mt-1"></i>
              <input type="password" className="w-full outline-none" placeholder="Password" />
              <p className="logForgot text-blue-600 flex">Forgot?</p>
            </div>
          </div>
          <Link to={"./List"} class> <button className="bg-blue-600 hover:bg-blue-700 shadow-blue-500 shadow-2xl text-white font-semibold py-4 px-4 rounded w-full">Click to Log in</button></Link>
          <p className="text-center mt-6 sso"><Link to={"./SignUp/sso"}>or log in with SSO</Link></p>

        </form>
      </div>
        <div className="LogAsideBox hidden md:block  font-bold">
      <p className="border-2 text- rounded-md mx-4">?</p>
      <p>Help</p>
    </div>
    
    </div>
  
    <div className="logDetail">
    <p className="mt-8 text-white">Don't have an account? <b className="pb-1 fadeBorder"><Link>Sign up</Link></b></p>

   
    <p className="mt-2 md:mt-20 recaptcha hidden md:block md:p-0 text-white logfooterP">This site is protected by reCAPTCHA and the Google <b className="pb-1 fadeBorder"><Link> Privacy Policy</Link></b> and <b className="pb-1 fadeBorder"><Link>Terms of Service apply</Link></b>.</p>
    </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"  preserveAspectRatio="none" style={{ position: "absolute", top:392, left: 0, width: "100%", height: "55%" }}>
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
    )
}
export default Login