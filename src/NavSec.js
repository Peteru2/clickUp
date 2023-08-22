const NavSec = () => {
    return ( 

        
      <nav className="flow-root flex group bg-white w-full  border-b-2 px-4 py-2 ">
       
      <div className="float-left">
        <i className="fa fa-search mr-4 text-sm"></i>
        <input type = "text" placeholder="Search tasks..." className="outline-none text-sm" />
        <button className="rounnded-lg hover:bg-gray-400 outline-none ml-5">...</button>
        <span className="border-r-2 ml-4"></span>
      </div>
     
      <div className="float-right flex ">
             
          <span className="mr-4 text-sm"><i className=""></i>Filter</span>
          <span className="mr-4 text-sm bg-gray-100 py-0.5 px-2 text-purple-500 rounded-md"><i className=""></i>Group by: Status</span>
          <span className="mr-4 text-sm"><i className=""></i>Subtasks</span>
          <span className="mr-4 text-sm"><i className=""></i>Show</span>
          <span className="mr-4 text-sm"><i className=""></i>...</span>


      </div>

     
    </nav>


     );
}
 
export default NavSec;