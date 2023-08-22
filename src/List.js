import React from "react";
import Navbar from "./Navbar";
import NavSec from "./NavSec";
import Task from "./DownTask";
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
  
    
      <div className="  border-2 rounded-md p-2 md:mx-6 mt-3 overflow-x-auto">
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
  <div className="mr-2 text-black mx-2 flex items-center">
    <span className="fa-stack fa-xs cursor-pointer">
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-chevron-down fa-stack-1x ml-1.5 md:ml-0 fa-inverse"></i>
    </span>
    <span className="md:text-sm text-xs  bg-gray-200 p-1  ml-16 md:ml-0 md:p-2 md:w-16 w-10 rounded group cursor-pointer">
      TO DO
      <i className="hidden ml-2 group-hover:inline-block"> k</i>
    </span>
    <span className="text-xs p-1 p-2 rounded  cursor-pointer ml-2 ">3 TASKS</span>
    <div className="md:ml-auto ml-44 flex items-center">
      <span className="text-xs px-16  p-1  cursor-pointer border-black rounded group hover:bg-gray-200 text-gray-500 hover:border-x-2 font-bold ">
        ASSIGNEE <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span>
      
      <span className="text-xs px-16  p-1  cursor-pointer border-black rounded group hover:bg-gray-200 text-gray-500 font-bold hover:border-x-2 ">
        DUE DATE <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span>
      <span className="text-xs px-16  p-1  cursor-pointer border-black rounded group hover:bg-gray-200 text-gray-500 font-bold hover:border-x-2 ">
        PRIORITY <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span>
      <span className="text-xs px-16  p-1  cursor-pointer border-black rounded group hover:bg-gray-200 text-gray-500 font-bold hover:border-x-2 ">
        A <i className="fa fa-heart hidden group-hover:inline-block"></i>
      </span>
      
      

    </div>
  </div>

    <div className="my-2">
  <div className="mr-2 mx-0 text-black flex items-center  group cursor-pointer">
    <span className="fa-stack fa-xs cursor-pointer hidden  group-hover:flex mr-1">
      <i className="fa fa-circle fa-stack-2x text-gray-200"></i>
      <i className="fa fa-chevron-down fa-stack-1x fa-inverse"></i>
    </span>
    <span><i className="fa fa-border mr-1 hidden group-hover:inline-block"></i></span>
    <div className="items-center flex  hover:bg-gray-200 py-1 border-b-2 w-full">
    <span className="b-2 bg-gray-200">i</span>
    <span className="text-  p-1 p-2 rounded  cursor-pointer tr=ext-gray-800 group-hover:text-blue-500">Task 1</span>
    <span className="text-sm  p-1 p-2 rounded  cursor-pointer"><i className=""></i></span>
    <span className="text-sm  p-1 p-2 rounded  cursor-pointer">Task 1</span>
    <span className="text-sm  p-1 p-2 rounded  cursor-pointer">Task 1</span>
    <div className="ml-auto flex items-center">
      <span className="text-xs px-4 bg-gray-300 p-1 border-x-2 border-black rounded">
        ASSIGNEE <i className="fa fa-heart hidden "></i>
      </span>
      <span className="text-xs px-16 p-2 rounded ml-2 ">DUE DATE</span>
      <span className="text-xs px-16 p-2 rounded ml-2 ">PRIORITY</span>
      <span className="text-xs px-16 p-2 rounded ml-2 font-bold">...</span>
      </div>
    </div>
  </div>
  </div>
</div>

        </div>
        
     
     
    <Task />
    </>
  );
};

export default App;