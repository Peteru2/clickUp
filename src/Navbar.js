import { Link } from "react-router-dom";
import  NavMenu from "./navMenu.js";
import "./Nav.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(true)
    const [sideBar, setSideBar] = useState(true)
    console.log(name);
     const handleClick = () =>{
      setState(change => !change)
      setSideBar(false)
     }

   
  
     
    
   return (
   
      <nav className={name ? " flow-root flex group bg-white w-full columns-2 border-b-2 px-4": "ml-24"}>
       
        <ul className="float-left flex">
          <div className="group">
        <li  
            onMouseEnter={() => setSideBar(false)} 
            onMouseLeave={() => setSideBar(true)}
            className="py-4 mr-3 topSideIcon" 
            onClick={handleClick} >
            T
          </li>
        <div 
            onMouseEnter={() => setSideBar(false)} 
            onMouseLeave={() => setSideBar(true)}
            onClick={handleClick}
            className={ sideBar ? "  topSideBar ":"topSideBar active py-4 mr-3 topSideIcon " }>

            <div className="px-3 rounded bg-gray-400">
              <i className = "fa fa-search mr-4"></i>search
            </div>
             <div className="grid gri-col-3">
              Alagbara
            </div>
        </div>

        </div>
        <li className="py-4 mr-3">Team Space</li>
          <li className="py-4 mr-3">Team Space</li>
        </ul>
        <ul className="flex">
          {NavMenu.map((item, index) =>{
            return(
              <li key={index} className=" py-4 hover:border-b-4">
              <Link className="px-8 border-l-2">{item.title}</Link>
            </li>
            )
          })
       
        }
        
        </ul>
        <ul className="float-right flex">
          <div  className="py-4 flex ">          <li>asds</li>
          <li className=" px-1 border-2 px-4 rounded-sm">share</li>
          </div>

        </ul>
      </nav>
)
        }
export default Navbar;