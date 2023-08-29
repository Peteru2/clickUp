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

    const navbar = document.querySelector('.nav');
    window.onscroll = () => {
            if (window.scrollY > 300) {
                navbar.classList.add('nav-active');
            } else {
                navbar.classList.remove('nav-active');
            }
        };
        
   return (
   
        <nav className="nav shadow-lg ">
            <Link to={"../Landing"}>
            <h2 className="nav-logo flex" >
            <img src={clickPng} className="navImg" alt="NavImg"/> <b >Click Up</b> 
            </h2>
            </Link>
           

            <div className = {name ? "nav-menu shadow-lg  active":"nav-menu "}>
            {MenuItem.map((item,index) => {
                return (
                          
                       <li className="nav-list" key = {index}>
                            <Link  className = {`flex w-full ${item.cName} ${item.NameOfClass}`}  to = {item.url}>
                                {item.title} <i className={` ${item.icon} ml-auto`}></i>
                            </Link>
                            </li>
                    
                );
            })}
            
        </div>
              <div className="ml-auto flex sideContent">
                <button className="mr-6 font-bold contact my-3">Contact Sales</button>
                <button className=" rounded-md px-6 py-2 text-white bg-blue-500 mr-4 shadow-lg sign my-8">Sign Up</button>
                <button className="rounded-md px-6 text-black bg-white shadow-lg log my-8">Login</button>

               
              </div>
               <div className="menu-icon ml-8" onClick={handleClick}>
               <i className = {name ? "fa fa-times" : "fa fa-bars-staggered"} ></i>
           </div>
              </nav>

)
        }
export default Navbar;