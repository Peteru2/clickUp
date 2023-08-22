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
  
    
      <div className="  border-2 rounded-md p-2 mx-6 mt-3">
          <div className="flex justify-between">
         
          <p className="text-gray-400 text-sm">Team Space <i className="fa fa-chevron-right"></i> Projects <i className="fa fa-chevron-right"></i> Project 1</p>
          <p className="text-gray-400 text-xs"><i className = "fa fa-check text-sm mr-1"></i> SHOW CLOSED</p>
          </div>

        <div className="flex mt-2 group">
                <div className="mr-2 text-black hover:bg-gray-200 hover:rounded hover:p-0.5 cursor-pointer">
                  <span className="fa-stack fa-xs">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-chevron-down fa-stack-1x fa-inverse"></i>
               </span>
               Project 1
             
        </div>

          
            <div className=" text-xs text-gray-400 mr-4 pt-1.5 cursor-pointer hover:bg-gray-200 hover:rounded hover:px-1">+ NEW TASK</div>
             <div className="group-hover:flex hidden pt-1.5 text-xs text-gray-400 cursor-pointer mr-4 hover:bg-gray-200 hover:rounded hover:px-1">ADD DESCRIPTION</div>
           <div className="group-hover:flex hidden text-xs pt-1.5 text-gray-400 mr-4 hover:bg-gray-200 cursor-pointer hover:rounded hover:px-1">ADD COMMENT</div>
      </div>

      <div className=" mt-2 mx-2 mt-14 ">
  <div className="mr-2 text-black flex items-center">
    <span className="fa-stack fa-xs cursor-pointer">
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-chevron-down fa-stack-1x fa-inverse"></i>
    </span>
    <span className="text-sm bg-gray-200 p-1 p-2 rounded group cursor-pointer">
      TO DO
      <i className="hidden group-hover:inline-block"> k</i>
    </span>
    <span className="text-xs p-1 p-2 rounded  cursor-pointer">3 TASKS</span>
    <div className="ml-auto flex items-center">
      <span className="text-xs px-16 bg-gray-300 p-1 border-x-2 border-black rounded group">
        ASSIGNEE <i className="fa fa-heart hidden group-hover:grid"></i>
      </span>
      <span className="text-xs px-16 bg-gray-300 p-1 border-x-2 border-black rounded group">
        ASSIGNEE <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span> <span className="text-xs px-16 bg-gray-300 p-1 border-x-2 border-black rounded group">
        ASSIGNEE <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span> <span className="text-xs px-16 bg-gray-300 p-1 border-x-2 border-black rounded group">
        ASSIGNEE <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span>

    </div>
  </div>

    <div className="my-4">
  <div className="mr-2 mx-3 text-black flex items-center">
    <span className="fa-stack fa-xs cursor-pointer">
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-chevron-down fa-stack-1x fa-inverse"></i>
    </span>
    <span className="text-sm bg-gray-200 p-1 p-2 rounded group cursor-pointer">
      TO DO
      <i className="hidden group-hover:inline-block"> k</i>
    </span>
    <span className="text-xs p-1 p-2 rounded  cursor-pointer">3 TASKS</span>
    <div className="ml-auto flex items-center">
      <span className="text-xs px-4 bg-gray-300 p-1 border-x-2 border-black rounded group">
        ASSIGNEE <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span>
      <span className="text-xs p-1 p-2 rounded ml-2">DUE DATE</span>
      <span className="text-xs p-1 p-2 rounded ml-2">PRIORITY</span>
    </div>
  </div>
  </div>
</div>

        </div>
        
     
     
  
    </>
  );
};

export default App;