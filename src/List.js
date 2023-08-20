import React from "react";
import Navbar from "./Navbar";
import NavSec from "./NavSec";

import ShowMoreButton from "./ShowMoreButton";

const App = () => {
  const articleSegments = [
    {
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces...",
    },
    {
      title: "JavaScript Fundamentals",
      content:
        "JavaScript is a versatile programming language...",
    },
    // Add more articles as needed
  ];

  return (
    <>
    <Navbar />
    <NavSec />
  
    
      <div className="  border-2 rounded-md p-2 mx-4">
          <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Team Space <i className="fa fa-chevron-right"></i> Projects <i className="fa fa-chevron-right"></i> Project 1</p>
          <p className="text-gray-400 text-sm">SHOW CLOSED</p>
          </div>
        <div className="flex mt-2 group">
            <div className="mr-2 text-black hover:bg-gray-200 hover:rounded hover:p-0.5"><i className="fa fa-chevron-down border-2 text-xs p-0.5 rounded-full border-black"></i> Project 1</div>
          
            <div className=" text-sm text-gray-400 mr-4 hover:bg-gray-200 hover:rounded hover:px-1">+ NEW TASK</div>
             <div className="group-hover:flex hidden text-sm text-gray-400 mr-4 hover:bg-gray-200 hover:rounded hover:px-1">ADD DESCRIPTION</div>
           <div className="group-hover:flex hidden text-sm text-gray-400 mr-4 hover:bg-gray-200 hover:rounded hover:px-1">ADD COMMENT</div>

        </div>
      </div>
     
     
  
    </>
  );
};

export default App;