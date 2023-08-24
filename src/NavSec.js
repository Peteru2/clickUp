const NavSec = () => {
    return ( 

        
      <nav className="flow-root flex group bg-white w-full  border-b-2 px-4 py-2 ">
       
      <div className="float-left">
        <i className="fa fa-search mr-4 text-sm"></i>
        <input type = "text" placeholder="Search tasks..." className="outline-none text-sm" />
        <button className=" rounded px-1 hover:bg-gray-200 outline-none ml-5"><i className="fa fa-ellipsis"></i></button>
        <span className="border-r-2 ml-4"></span>
      </div>
     
      <div className="float-right flex ">
             
          <span className="mr-4 text-xs p-1 hover:bg-gray-200 rounded-md cursor-pointer"><i className="fa fa-filter text-gray-400"></i> Filter</span>
          <span className="mr-4 text-xs bg-gray-100 py-1 px-2 text-purple-500 rounded-md cursor-pointer"><i className="fa fa-layer-group"></i> Group by: Status</span>
          <span className="mr-4 text-xs p-1 hover:bg-gray-200 rounded-md cursor-pointer"><i className="fa fa-diagram-successor text-gray-400"></i> Subtask</span>
          <span className="mr-4 text-xs p-1 hover:bg-gray-200 rounded-md cursor-pointer"><i className="fa fa-eye text-gray-400"></i> Show</span>
          <span className="mr-4 text-sm p-1 hover:bg-gray-200 rounded-md cursor-pointer"><i className="fa fa-ellipsis text-gray-600 "></i></span>

         


      </div>

     
    </nav>


     );
}
 
export default NavSec;