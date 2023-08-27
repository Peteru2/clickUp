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
   
        <nav className="nav px-10">
            <h2 className="nav-logo flex" style = {name ?{visibility: "hidden"}: {visibility: "visible"}}>
            <img src={clickPng} /> <b >Click Up</b> 
            </h2>

            <div className="menu-icon" onClick={handleClick}>
                <i className = {name ? "fa fa-times" : "fa fa-bars"} ></i>
            </div>

            <div className = {name ? "nav-menu active":"nav-menu"}>
            {MenuItem.map((item,index) => {
                return (
                          
                       <li className="nav-list" key = {index}>
                            <Link  className = {item.cName}  to = {item.url}>
                                {item.title} <i className={item.icon}></i>
                            </Link>
                            </li>
                    
                );
            })}
            
        </div>
              <div className="ml-auto">
                asda
              </div>
              </nav>

)
        }
export default Navbar;