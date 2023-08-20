const NavSec = () => {
    return ( 

        
      <nav className="flow-root flex group bg-white w-full  border-b-2 px-4 my-1">
       
      <div className="float-left">
        <i className="fa fa-search mr-4"></i>
        <input type = "text" placeholder="Search tasks..." className="outline-none" />
        <button className="rounnded-lg hover:bg-gray-400 outline-none ">...</button>
        <span className="border-r-2 ml-4"></span>
      </div>
     
      <div className="float-right flex ">
             
          <span className="mr-4"><i className=""></i>Filter</span>
          <span className="mr-4"><i className=""></i>Group by: Status</span>
          <span className="mr-4"><i className=""></i>Subtasks</span>
          <span className="mr-4"><i className=""></i>Show</span>
          <span className="mr-4"><i className=""></i>...</span>


      </div>

     
    </nav>


     );
}
 
export default NavSec;