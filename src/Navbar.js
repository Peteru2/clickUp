import { Link, useLocation } from "react-router-dom";
import  NavMenu from "./navMenu.js";
import "./Nav.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(true) 
   const [sideBar, setSideBar] = useState(true)
    const [showContent, setShowContent] = useState(false);
    const location = useLocation();
  
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
   
      <nav className={name ? "flex group bg-white w-full columns-2 border-b-2 px-4": "pl-24"}>
       
        <ul className=" flex">
          <div className="group">
        <li  
            onMouseEnter={() => setSideBar(false)} 
            onMouseLeave={() => setSideBar(true)}
            className="py-4 mr-3 topSideIcon" 
            onClick={handleClick} >
            <i className="mt-1.5 fa fa-caret-square-o-right"></i>
          </li>
        <div 
            onMouseEnter={() => setSideBar(false)} 
            onMouseLeave={() => setSideBar(true)}
            className={ sideBar ? "  topSideBar ":"topSideBar active py-4 mr-3 topSideIcon text-left" }>

            <div className="px-3 py-1 rounded bg-gray-200 flex text-gray-400 hover:text-blue-400">
              <i className = "fa fa-search mr-4 mt-1"></i><span>Search</span><span className="ml-auto">Ctrl K</span>
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
        <li className="py-4 mr-3  text-gray-600 text-lg">Everything</li>
        
        </ul>
        <ul className="flex">
          {NavMenu.map((item, index) =>{
            return(
              <li key={index} className={`py-4 hover:border-b-4  ${location.pathname === item.url ? 'border-b-4 border-blue-600 text-blue-600' : ''}`}>
              <Link className="px-8 border-l-2" to={item.url}><i className={item.icon}></i> {item.title}</Link>
             
            </li>
            )
          })
       
        }
        
        </ul>
        <ul className=" flex ml-auto">
               
          {/* <li className="  border-2 px-2 py-1 mt-3 mr-4 rounded-lg">Action <button className="border-l-2 px-1"><i className="fa fa-share-alt"></i></button> </li> */}
      
          <li className="  border-2 px-2 mt-3 py-1 mb-3 rounded-lg"><i className="fa fa-share-alt"></i> Share</li>
         
        </ul>
      </nav>
)
        }
export default Navbar;