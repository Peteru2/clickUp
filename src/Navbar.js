import { Link } from "react-router-dom";
import  NavMenu from "./navMenu.js";
import "./Nav.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(true) 
   const [sideBar, setSideBar] = useState(true)
   
   
    const [showContent, setShowContent] = useState(false);
  
    const toggleContent = () => {
      setShowContent(!showContent);
    };
  
  //  const [sideBarElem, setSideBarElem] = useState(true)

    console.log(name);
     const handleClick = () =>{
      setState(change => !change)
      setSideBar(false)
     }
   
  
     
    
   return (
   
      <nav className={name ? " flow-root flex group bg-white w-full columns-2 border-b-2 px-4": "pl-24"}>
       
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
            className={ sideBar ? "  topSideBar ":"topSideBar active py-4 mr-3 topSideIcon " }>

            <div className="px-3 py-1 rounded bg-gray-400">
              <i className = "fa fa-search mr-4"></i>search
            </div>
             <div className=" px-3 mt-2">
             <i className = "fa fa-home mr-4"></i> Home
            </div>
            <div className=" px-3 mt-2">
             <i className = "fa fa-home mr-4"></i> Notification
            </div>
            <div className={`goals ${showContent ? "px-3 mt-2 visible" : "hidden"  }`} >
             <i className = "fa fa-home mr-4"></i> Goals
            </div>
             <div className=" px-3 mt-2" onClick={toggleContent}>
             <i className = "fa fa-home mr-4"></i> Show more
            </div>
            <div className = "sideDropBar">
              <div>Click Me</div>
              <div className="sideDropBarElem">
                Lets go
              </div>
            </div>
               </div>

        </div>
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
          <div  className=" flex ">          
          <li className="  border-2 px-2 py-1 mt-3 mr-4 rounded-lg">Action <button className="border-l-2 px-1"><i className="fa fa-share-alt"></i></button> </li>
      
          <li className="  border-2 px-2 py-1 mt-3 rounded-lg"><i className="fa fa-share-alt"></i> Share</li>
          </div>

        </ul>
      </nav>
)
        }
export default Navbar;