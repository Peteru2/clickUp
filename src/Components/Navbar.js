import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import clickPng from "../clickIcon.png";

const Navbar = () => {
  const [name, setName] = useState(false);

  const handleClick = () => {
    setName((current) => !current);
  };

  const navbarRef = useRef(null);
  const navSignRef = useRef(null);
  const navLoginRef = useRef(null);
  const  navContactRef = useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        navbarRef.current.classList.add("nav-active");
        navbarRef.current.classList.add("shadow-xl");
        navSignRef.current.classList.add("signUpDown");
        navSignRef.current.classList.remove("signUpTop");
        navLoginRef.current.classList.add("loginDown");
        navLoginRef.current.classList.remove("loginTop");
        navContactRef.current.classList.add("text-black");
        navContactRef.current.classList.remove("text-white");

        


        // navSignRef.current.classList.add("text-white");
        // navSignRef.current.classList.remove("text-blue-500");
      } else {
        navbarRef.current.classList.remove("nav-active");
        navbarRef.current.classList.remove("shadow-xl");
        navSignRef.current.classList.add("signUpTop");
        navSignRef.current.classList.remove("signUpDown");
        navLoginRef.current.classList.add("loginTop");
        navLoginRef.current.classList.remove("loginDown");
        navContactRef.current.classList.add("text-white");
         navContactRef.current.classList.remove("text-black");
       




        // navSignRef.current.classList.remove("bg-blue-500");
        // navSignRef.current.classList.add("text-blue-500");
        // navSignRef.current.classList.remove("text-white");

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav" ref={navbarRef}>
      <Link to={"../Landing"}>
        <h2 className="nav-logo flex">
          <img src={clickPng} className="navImg" alt="NavImg" /> <b>ClickUp</b>
        </h2>
      </Link>

      <div className={name ? "nav-menu shadow-lg  active" : "nav-menu "}>
        {MenuItem.map((item, index) => {
          return (
            <li className="nav-list" key={index}>
              <Link
                className={`flex w-full ${item.cName} ${item.NameOfClass}`}
                to={item.url}
              >
                {item.title} <i className={` ${item.icon} ml-auto`}></i>
              </Link>
            </li>
          );
        })}
      </div>
      <div className="ml-auto flex sideContent">
        <button className="mr-6 font-bold contact my-3" ref={navContactRef}>Contact Sales</button>
        <button
          className="rounded-lg px-6 py-1 md:py-2  mr-4  shadow-lg  my-3 md:my-8"
          ref={navSignRef}
        >
          Sign Up
        </button>
        <button className="rounded-md px-6  shadow-xl log my-8 " ref={navLoginRef}>Login</button>
      </div>
      <div className="menu-icon ml-8" onClick={handleClick}>
        <i className={name ? "fa fa-times" : "fa fa-bars-staggered"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
