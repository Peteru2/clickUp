import img from "./clickIcon.jpg"
import "./style.css"
const Login = () =>{
    return(
        <div>
         <nav className="flow-root flex group mb-10 w-full columns-2  px-4 py-6 my-1">
       
       <div className="float-left flex">

        <img src={img} className=" w-8 ml-0" alt="Home" />
        <h2 className="font-bold text-3xl">Click Up  </h2>
        
       </div>
      
       <ul className="float-right flex">
         <div  className="flex">          
        
         <li className="  px-2 py-2 mt-3 mr-4 rounded-lg">Don't have an account?</li>
    
        <li className="  border-2 px-3 py-2 mt-3 rounded-lg bg-blue-600 text-white shadow-blue-300 shadow-xl">Sign Up</li>
         </div>
         
 
       </ul>
     </nav>

     <div className=" flex justify-center items-center">
      <div className="bg-white p-16 w-44 rounded shadow-md loginForm ">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
        <form>
          <div className="mb-4">
          <label className="my-10 text-2xl">Email</label>
            <div className="flex items-center border rounded px-3 mt-4 py-2">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 12H2m8 0v6m0-6l6-6-6 6z"></path></svg>
              <input type="text" className="w-full outline-none" placeholder="Email" />
            </div>
          </div>
          <div className="mb-6">
          <label className="my-10 text-2xl">Password</label>
            <div className="flex items-center border rounded px-3 mt-4 py-2">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
              <input type="password" className="w-full outline-none" placeholder="Password" />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-600 shadow-blue-500 shadow-2xl text-white font-semibold py-4 px-4 rounded w-full">Log in</button>

        </form>
      </div>
    </div>

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