const NavSec = () => {
    return ( 

        
      <nav className="flow-root flex group bg-white w-full columns-2 border-b-2 px-4 my-1">
       
      <div className="float-left">
        <i className="fa fa-search mr-4"></i>
        <input type = "text" placeholder="search tasks..." className="outline-none" />
        <button className="rounnded-lg hover:bg-gray-400 mt-2 p-1">...</button>
      </div>
     
      <ul className="float-right flex">
        <div  className=" flex ">          
        <li className="  border-2 px-2 py-1 mt-3 mr-4 rounded-lg">Action <button className="border-l-2 px-1"><i className="fa fa-share-alt"></i></button> </li>
    
        <li className="  border-2 px-2 py-1 mt-3 rounded-lg"><i className="fa fa-share-alt"></i> Share</li>
        </div>

      </ul>
    </nav>
     );
}
 
export default NavSec;