import { Link } from "react-router-dom";
import  NavMenu from "./navMenu.js";
// import "./Nav.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(false)
    console.log(name);
      const  handleClick = () => {
        setState(current => !current )
    }

   return (
   
      <nav className=" flow-root flex group bg-white w-full columns-2 border-b-2 px-3">
       
        <ul className="float-left">
          <li className="py-4 mr-3">jskjs</li>
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
          <li className="py-4 ">asds</li>
          <li className=" py-4 text-white group-hover:text-black">asdadfkla</li>
        </ul>
      </nav>
)
        }
export default Navbar;