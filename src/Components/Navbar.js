import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
// import { Component } from "react";
import "./navbar.css";
import { useState } from "react";
import clickPng from "../clickIcon.png"


const Navbar = () => {

   const [name, setState] = useState(false)

  const  handleClick = () => {
        setState(current => !current )
    }

   return (
   
        <nav className="nav shadow-lg px-10">
            <h2 className="nav-logo flex" >
            <img src={clickPng} className="navImg" alt="NavImg"/> <b >Click Up</b> 
            </h2>

           

            <div className = {name ? "nav-menu shadow-lg  active":"nav-menu "}>
            {MenuItem.map((item,index) => {
                return (
                          
                       <li className="nav-list" key = {index}>
                            <Link  className = {`${item.cName} ${item.NameOfClass}`}  to = {item.url}>
                                {item.title} <i className={item.icon}></i>
                            </Link>
                            </li>
                    
                );
            })}
            
        </div>
              <div className="ml-auto flex sideContent">
                <button className="mr-6 font-bold contact">Contact Sales</button>
                <button className=" rounded-md px-6 text-white bg-blue-500 mr-4 shadow-lg sign">Sign Up</button>
                <button className="rounded-md px-6 text-black bg-white shadow-lg log">Login</button>

               
              </div>
               <div className="menu-icon ml-4" onClick={handleClick}>
               <i className = {name ? "fa fa-times" : "fa fa-bars-staggered"} ></i>
           </div>
              </nav>

)
        }
export default Navbar;