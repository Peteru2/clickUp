import img from "./clickIcon.jpg"
import "./style.css"
const Login = () =>{
    return(
        <div>
         <nav className="flow-root flex group  w-full columns-2 border-b-2 px-4 py-6 my-1">
       
       <div className="float-left flex">

        <img src={img} className=" w-8 ml-0" alt="Home" />
        <h2 className="font-bold text-3xl">Click Up  </h2>
        
       </div>
      
       <ul className="float-right flex">
         <div  className="flex">          
        
         <li className="  px-2 py-2 mt-3 mr-4 rounded-lg">Don't have an account?</li>
    
        <li className="  border-2 px-3 py-2 mt-3 rounded-lg">Sign Up</li>
         </div>
         
 
       </ul>
     </nav>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="svg" preserveAspectRatio="none" style={{ position: "absolute", top:320, left: 0, width: "100%", height: "60%" }}>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }} />
    </linearGradient>
    <pattern id="dots-pattern" width="4" height="3" patternUnits="userSpaceOnUse" style={{ position: "absolute", top:320, left: 0, width: "100%", height: "60%" }}>
      <circle cx="1" cy="1" r="0.4" fill="black"  />
    </pattern>
  </defs>
  <path d="M0,28 Q0,10 70,1 H70 Q90,0 100,20 V100 H0 Z" fill="url(#grad1)" />

  <rect x="0" y="15" width="100%" height="75%" fill="url(#dots-pattern)" />
</svg>
        </div>
    )
}
export default Login