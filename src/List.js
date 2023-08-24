import React from "react";
import Navbar from "./Navbar";
import NavSec from "./NavSec";
import Task from "./DownTask";


const App = () => {
 

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
                <span className="fa fa-circle-chevron-down text-1xl mr-2 circle-font"></span>

               Project 1 <i className="fa fa-info-circle text-gray-400"></i>
             
        </div>

          
            <div className=" text-xs text-gray-400 mr-4 pt-1.5 cursor-pointer hover:bg-gray-200 hover:rounded hover:px-1">+ NEW TASK</div>
             <div className="group-hover:flex hidden pt-1.5 text-xs text-gray-400 cursor-pointer mr-4 hover:bg-gray-200 hover:rounded hover:px-1">ADD DESCRIPTION</div>
           <div className="group-hover:flex hidden text-xs pt-1.5 text-gray-400 mr-4 hover:bg-gray-200 cursor-pointer hover:rounded hover:px-1">ADD COMMENT</div>
      </div>

      <div className=" mt-2 mx-2 mt-16 ">
  <div className="mr-2 text-black mx-2 flex items-center">
  <span className="fa fa-circle-chevron-down text-1xl mr-2 circle-font"></span>

    <span className="md:text-sm text-xs  bg-gray-200   ml-16 md:ml-0 md:p-1.5 rounded group cursor-pointer">
      TO DO
      <i className="hidden ml-2 group-hover:inline-block fa fa-pen border-r-2 border-gray-400 p-0.5 h-full "> </i>
      <i className="hidden mx-0.5 group-hover:inline-block fa fa-ellipsis p-0.5 h-full "> </i>

    </span>
    <span className="text-xs p-1 p-2 rounded  cursor-pointer ml-2  hover:bg-gray-200 group">3 TASKS <i className="fa fa-heart hidden group-hover:inline-block"></i></span>
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
      <span className=" px-2  p-1  cursor-pointer border-black rounded hover:bg-gray-200 text-gray-500 font-bold  ">
       <i className="fa fa-plus-circle"></i>
      </span>
      
      

    </div>
  </div>

  <div className="">
  <div className="mr-2 mx-0 text-black flex items-center group cursor-pointer">
    <span className="fa fa-circle-thin text-gray-400 mr-2 circle-font opacity-0 group-hover:opacity-100" ></span>
    {/* <span className="fa fa-grip-dots-vertical hidden group-hover:inline-block"></span> */}

    <div className="items-center flex hover:bg-gray-100 py-1 border-b-2 w-full">

      <span className="bg-gray-400 text-gray-400 p-1.5 border-2 rounded ml-5"></span>
      <span className="text-sm p-1 p-2 rounded cursor-pointer text-gray-800 group-hover:text-blue-500">Task 1</span>

      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-diagram-successor"></i> 
      </span>
      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-tags"></i> 
      </span>
        <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-pen"></i> 
      </span>
      
      
      <div className="ml-auto flex items-center text-gray-800">
        <span className="text-xs p-2 user-icon border-dotted border-gray-600 text-gray-600 border-2 rounded-full rounded">
          <i className="fa fa-user-plus"></i>
        </span>
        <span className="text-sm p-2 mx-16 text-gray-600 calender-icon">
          <i className="fa fa-calendar-o"></i> 
        </span>
        <span className="text-sm p-2 flag-icon text-gray-600">
          <i className="fa fa-flag-o"></i>
        </span>
        <span className="text-xs px-3 p-2 rounded ml-2 font-bold opacity-0 group-hover:opacity-100">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
    </div>
  </div>
</div>

<div className="">
  <div className="mr-2 mx-0 text-black flex items-center group cursor-pointer">
    <span className="fa fa-circle-thin text-gray-400 mr-2 circle-font opacity-0 group-hover:opacity-100" ></span>
    {/* <span className="fa fa-grip-dots-vertical hidden group-hover:inline-block"></span> */}

    <div className="items-center flex hover:bg-gray-100 py-1 border-b-2 w-full">

      <span className="bg-gray-400 text-gray-400 p-1.5 border-2 rounded ml-5"></span>
      <span className="text-sm p-1 p-2 rounded cursor-pointer text-gray-800 group-hover:text-blue-500">Task 2 </span>

      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-diagram-successor"></i> 
      </span>
      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-tags"></i> 
      </span>
        <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-pen"></i> 
      </span>
      
      
      <div className="ml-auto flex items-center text-gray-800">
        <span className="text-xs p-2 user-icon border-dotted border-gray-600 text-gray-600 border-2 rounded-full rounded">
          <i className="fa fa-user-plus"></i>
        </span>
        <span className="text-sm p-2 mx-16 text-gray-600 calender-icon">
          <i className="fa fa-calendar-o"></i> 
        </span>
        <span className="text-sm p-2 flag-icon text-gray-600">
          <i className="fa fa-flag-o"></i>
        </span>
        <span className="text-xs px-3 p-2 rounded ml-2 font-bold opacity-0 group-hover:opacity-100">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
    </div>
  </div>
</div>

<div className="">
  <div className="mr-2 mx-0 text-black flex items-center group cursor-pointer">
    <span className="fa fa-circle-thin text-gray-400 mr-2 circle-font opacity-0 group-hover:opacity-100" ></span>
    {/* <span className="fa fa-grip-dots-vertical hidden group-hover:inline-block"></span> */}

    <div className="items-center flex hover:bg-gray-100 py-1 border-b-2 w-full">

      <span className="bg-gray-400 text-gray-400 p-1.5 border-2 rounded ml-5"></span>
      <span className="text-sm p-1 p-2 rounded cursor-pointer text-gray-800 group-hover:text-blue-500">Task 3</span>

      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-diagram-successor"></i> 
      </span>
      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-tags"></i> 
      </span>
        <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-pen"></i> 
      </span>
      
      
      <div className="ml-auto flex items-center text-gray-800">
        <span className="text-xs p-2 user-icon border-dotted border-gray-600 text-gray-600 border-2 rounded-full rounded">
          <i className="fa fa-user-plus"></i>
        </span>
        <span className="text-sm p-2 mx-16 text-gray-600 calender-icon">
          <i className="fa fa-calendar-o"></i> 
        </span>
        <span className="text-sm p-2 flag-icon text-gray-600">
          <i className="fa fa-flag-o"></i>
        </span>
        <span className="text-xs px-3 p-2 rounded ml-2 font-bold opacity-0 group-hover:opacity-100">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
    </div>
  </div>
</div>
<div>
  <p className="text-xs text-gray-500 text-left ml-11 font-bold mt-2">+ New task</p>
</div>
</div>

        </div>



        <div className="  border-2 rounded-md p-2 md:mx-6 mt-3 overflow-x-auto">
          <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Team Space <i className="fa fa-chevron-right"></i> Projects <i className="fa fa-chevron-right"></i> Project 2</p>
          <p className="text-gray-400 text-xs"><i className = "fa fa-check text-sm mr-1"></i> SHOW CLOSED</p>
          </div>

        <div className="flex mt-2 group">
                <div className="mr-2 text-black hover:bg-gray-200 hover:rounded hover:p-0.5 cursor-pointer">
                <span className="fa fa-circle-chevron-down text-1xl mr-2 circle-font"></span>

               Project 2 <i className="fa fa-info-circle text-gray-400"></i>
             
        </div>

          
            <div className=" text-xs text-gray-400 mr-4 pt-1.5 cursor-pointer hover:bg-gray-200 hover:rounded hover:px-1">+ NEW TASK</div>
             <div className="group-hover:flex hidden pt-1.5 text-xs text-gray-400 cursor-pointer mr-4 hover:bg-gray-200 hover:rounded hover:px-1">ADD DESCRIPTION</div>
           <div className="group-hover:flex hidden text-xs pt-1.5 text-gray-400 mr-4 hover:bg-gray-200 cursor-pointer hover:rounded hover:px-1">ADD COMMENT</div>
      </div>

      <div className=" mt-2 mx-2 mt-16 ">
  <div className="mr-2 text-black mx-2 flex items-center">
  <span className="fa fa-circle-chevron-down text-1xl mr-2 circle-font"></span>

  <span className="md:text-sm text-xs  bg-blue-600 text-white  ml-16 md:ml-0 md:p-1.5 rounded group cursor-pointer">
      <span>IN PROGRESS</span>
      <i className="hidden ml-2 group-hover:inline-block fa fa-pen border-r-2 border-gray-400 p-0.5 h-full "> </i>
      <i className="hidden mx-0.5 group-hover:inline-block fa fa-ellipsis p-0.5 h-full "> </i>

    </span>
    <span className="text-xs p-1 p-2 rounded  cursor-pointer ml-2  hover:bg-gray-200 group">1 TASKS <i className="fa fa-heart hidden group-hover:inline-block"></i></span>
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
      <span className=" px-2  p-1  cursor-pointer border-black rounded hover:bg-gray-200 text-gray-500 font-bold  ">
       <i className="fa fa-plus-circle"></i>
      </span>
      
      

    </div>
  </div>

  <div className="">
  <div className="mr-2 mx-0 text-black flex items-center group cursor-pointer">
    <span className="fa fa-circle-thin text-gray-400 mr-2 circle-font opacity-0 group-hover:opacity-100" ></span>
    {/* <span className="fa fa-grip-dots-vertical hidden group-hover:inline-block"></span> */}

    <div className="items-center flex hover:bg-gray-100 py-1 border-b-2 w-full">

      <span className="bg-gray-400 text-gray-400 p-1.5 border-2 rounded ml-5"></span>
      <span className="text-sm p-1 p-2 rounded cursor-pointer text-gray-800 group-hover:text-blue-500">Task 1</span>

      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-diagram-successor"></i> 
      </span>
      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-tags"></i> 
      </span>
        <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-pen"></i> 
      </span>
      
      
      <div className="ml-auto flex items-center text-gray-800">
        <span className="text-xs p-2 user-icon border-dotted border-gray-600 text-gray-600 border-2 rounded-full rounded">
          <i className="fa fa-user-plus"></i>
        </span>
        <span className="text-sm p-2 mx-16 text-gray-600 calender-icon">
          <i className="fa fa-calendar-o"></i> 
        </span>
        <span className="text-sm p-2 flag-icon text-gray-600">
          <i className="fa fa-flag-o"></i>
        </span>
        <span className="text-xs px-3 p-2 rounded ml-2 font-bold opacity-0 group-hover:opacity-100">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
    </div>
  </div>
</div>


<div>
  <p className="text-xs text-gray-500 text-left ml-11 font-bold mt-2">+ New task</p>
</div>


<div className=" mx-0 mt-10 ">
  <div className="mr-2 text-black mx-2 flex items-center">
  <span className="fa fa-circle-chevron-down text-1xl mr-2 circle-font"></span>

  <span className="md:text-sm text-xs  bg-gray-200   ml-16 md:ml-0 md:p-1.5 rounded group cursor-pointer">
      <span>TO DO</span>
      <i className="hidden ml-2 group-hover:inline-block fa fa-pen border-r-2 border-gray-400 p-0.5 h-full "> </i>
      <i className="hidden mx-0.5 group-hover:inline-block fa fa-ellipsis p-0.5 h-full "> </i>

    </span>
    <span className="text-xs p-1 p-2 rounded  cursor-pointer ml-2  hover:bg-gray-200 group">2 TASKS <i className="fa fa-heart hidden group-hover:inline-block"></i></span>
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
      <span className=" px-2  p-1  cursor-pointer border-black rounded hover:bg-gray-200 text-gray-500 font-bold  ">
       <i className="fa fa-plus-circle"></i>
      </span>
      
      

    </div>
  </div>

  <div className="">
  <div className="mr-2 mx-0 text-black flex items-center group cursor-pointer">
    <span className="fa fa-circle-thin text-gray-400 mr-2 circle-font opacity-0 group-hover:opacity-100" ></span>
    {/* <span className="fa fa-grip-dots-vertical hidden group-hover:inline-block"></span> */}

    <div className="items-center flex hover:bg-gray-100 py-1 border-b-2 w-full">

      <span className="bg-gray-400 text-gray-400 p-1.5 border-2 rounded ml-5"></span>
      <span className="text-sm p-1 p-2 rounded cursor-pointer text-gray-800 group-hover:text-blue-500">Task 1</span>

      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-diagram-successor"></i> 
      </span>
      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-tags"></i> 
      </span>
        <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-pen"></i> 
      </span>
      
      
      <div className="ml-auto flex items-center text-gray-800">
        <span className="text-xs p-2 user-icon border-dotted border-gray-600 text-gray-600 border-2 rounded-full rounded">
          <i className="fa fa-user-plus"></i>
        </span>
        <span className="text-sm p-2 mx-16 text-gray-600 calender-icon">
          <i className="fa fa-calendar-o"></i> 
        </span>
        <span className="text-sm p-2 flag-icon text-gray-600">
          <i className="fa fa-flag-o"></i>
        </span>
        <span className="text-xs px-3 p-2 rounded ml-2 font-bold opacity-0 group-hover:opacity-100">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
    </div>
  </div>
</div>
<div className="">
  <div className="mr-2 mx-0 text-black flex items-center group cursor-pointer">
    <span className="fa fa-circle-thin text-gray-400 mr-2 circle-font opacity-0 group-hover:opacity-100" ></span>
    {/* <span className="fa fa-grip-dots-vertical hidden group-hover:inline-block"></span> */}

    <div className="items-center flex hover:bg-gray-100 py-1 border-b-2 w-full">

      <span className="bg-gray-400 text-gray-400 p-1.5 border-2 rounded ml-5"></span>
      <span className="text-sm p-1 p-2 rounded cursor-pointer text-gray-800 group-hover:text-blue-500">Task 2</span>

      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-diagram-successor"></i> 
      </span>
      <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-tags"></i> 
      </span>
        <span className="text-xs rounded p-0.5 border-2 border-gray-400 cursor-pointer mr-1 hidden group-hover:inline-block">
        <i className="fa fa-pen"></i> 
      </span>
      
      
      <div className="ml-auto flex items-center text-gray-800">
        <span className="text-xs p-2 user-icon border-dotted border-gray-600 text-gray-600 border-2 rounded-full rounded">
          <i className="fa fa-user-plus"></i>
        </span>
        <span className="text-sm p-2 mx-16 text-gray-600 calender-icon">
          <i className="fa fa-calendar-o"></i> 
        </span>
        <span className="text-sm p-2 flag-icon text-gray-600">
          <i className="fa fa-flag-o"></i>
        </span>
        <span className="text-xs px-3 p-2 rounded ml-2 font-bold opacity-0 group-hover:opacity-100">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
    </div>
  </div>
</div>

<div>
  <p className="text-xs text-gray-500 text-left ml-11 font-bold mt-2">+ New task</p>
</div>
</div>
</div>

        </div>
        
     
     
    <Task />
    </>
  );
};

export default App;