import Navbar from "./Navbar";
import NavSec from "./NavSec";
import Task from "./DownTask";
const Board = () => {
    return ( 
        <>
         <Navbar />
         <NavSec />
         <section className=" mt-6  md:mx-10 mx-12 justify-center align-center">
            <section className="md:flex grid grid-col-1 ">
                    <div className="w-72 border-t-4 shadow-md p-3 rounded-md group">
                        <p className="flex text-gray-700 ">TO DO <span className="ml-3 border-2 rounded-full px-2">5</span> 
                            <span className="ml-auto opacity-0 group-hover:opacity-100">
                                <i className="fa fa-chevron-left px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"></i>
                                <i className="fa fa-ellipsis px-2"></i>
                                <i className="fa fa-plus  px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"></i>
                            </span>
                        </p>
                    </div>
                    <div className="w-72 md:ml-6 ml-0 mt-4 md:mt-0 border-t-4 border-blue-500 shadow-md p-3 rounded-md group">
                        <p className="flex text-gray-700 ">IN PROGRESS<span className="ml-3 border-2 rounded-full px-2">1</span> 
                            <span className="ml-auto opacity-0 group-hover:opacity-100">
                                <i className="fa fa-chevron-left px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"></i>
                                <i className="fa fa-ellipsis px-2"></i>
                                <i className="fa fa-plus  px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"></i>
                            </span>
                        </p>
                    </div>
                    <div className="w-72 md:ml-6 ml-0 mt-4 md:mt-0 border-t-4 border-green-500 shadow-md p-3 rounded-md group">
                        <p className="flex text-gray-700 ">COMPLETE <span className="ml-3 border-2 rounded-full px-2">0</span> 
                            <span className="ml-auto opacity-0 group-hover:opacity-100">
                                <i className="fa fa-chevron-left px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"></i>
                                <i className="fa fa-ellipsis px-2"></i>
                                <i className="fa fa-plus  px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"></i>
                            </span>
                        </p>
                    </div>
            </section>

            <div className="md:flex grid  mt-7">
            <div className="h-96  overflow-y-hidden hover:overflow-y-scroll w-80 scrollbar-style">
               
                    <div className="border-2 shadow-md rounded w-64 group cursor-pointer">
                        <div className="p-2">
                            <p className="text-xs">Team space > Projects > Project 1</p>
                            <div className="flex">
                                <span>Taks 1</span>
                                <span className="p-1 border-dotted border-gray-600 text-gray-600 border-2  hidden group-hover:flex rounded-full ml-auto rounded">
                                     <i className="fa fa-user-plus"></i>
                                </span>
                            </div>
                            <p><i className="fa fa-diagram-successor mt-2 text-gray-300 opacity-0 group-hover:opacity-100"></i></p>
                            <p className="text-gray-300 text-sm mt-4 group-hover:hidden">+ ADD SUBTASK</p>
                        </div>
                        <div className="shadow-md border-t-2 flex border-gray-100 text-gray-300 px-2 py-1 hidden group-hover:flex">
                            <div className="">                              
                                <span className="mr-3">
                                    <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-flag-o"></i>
                                </span>
                                <span className="">
                                <i className="fa fa-tags"></i> 
                                </span>
                            </div>
                            <div className="ml-auto">
                            <span className="mr-3">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-circle-thin"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-ellipsis"></i>
                                </span>
                            </div>

                        </div>
                    </div>

                  
                    <div className="border-2 shadow-md rounded w-64 mt-4 group cursor-pointer">
                        <div className="p-2">
                            <p className="text-xs">Team space > Projects > Project 1</p>
                            <div className="flex">
                                <span>Taks 1</span>
                                <span className="p-1 border-dotted border-gray-600 text-gray-600 border-2  hidden group-hover:flex rounded-full ml-auto rounded">
                                     <i className="fa fa-user-plus"></i>
                                </span>
                            </div>
                            <p><i className="fa fa-diagram-successor mt-2 text-gray-300 opacity-0 group-hover:opacity-100"></i></p>
                            <p className="text-gray-300 text-sm mt-4 group-hover:hidden">+ ADD SUBTASK</p>
                        </div>
                        <div className="shadow-md border-t-2 flex border-gray-100 text-gray-300 px-2 py-1 hidden group-hover:flex">
                            <div className="">                              
                                <span className="mr-3">
                                    <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-flag-o"></i>
                                </span>
                                <span className="">
                                <i className="fa fa-tags"></i> 
                                </span>
                            </div>
                            <div className="ml-auto">
                            <span className="mr-3">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-circle-thin"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-ellipsis"></i>
                                </span>
                            </div>

                        </div>
                    </div>


                    <div className="border-2 shadow-md rounded w-64 mt-4 group cursor-pointer">
                        <div className="p-2">
                            <p className="text-xs">Team space > Projects > Project 1</p>
                            <div className="flex">
                                <span>Taks 1</span>
                                <span className="p-1 border-dotted border-gray-600 text-gray-600 border-2  hidden group-hover:flex rounded-full ml-auto rounded">
                                     <i className="fa fa-user-plus"></i>
                                </span>
                            </div>
                            <p><i className="fa fa-diagram-successor mt-2 text-gray-300 opacity-0 group-hover:opacity-100"></i></p>
                            <p className="text-gray-300 text-sm mt-4 group-hover:hidden">+ ADD SUBTASK</p>
                        </div>
                        <div className="shadow-md border-t-2 flex border-gray-100 text-gray-300 px-2 py-1 hidden group-hover:flex">
                            <div className="">                              
                                <span className="mr-3">
                                    <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-flag-o"></i>
                                </span>
                                <span className="">
                                <i className="fa fa-tags"></i> 
                                </span>
                            </div>
                            <div className="ml-auto">
                            <span className="mr-3">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-circle-thin"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-ellipsis"></i>
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="border-2 shadow-md rounded w-64 mt-4 group cursor-pointer">
                        <div className="p-2">
                            <p className="text-xs">Team space > Projects > Project 1</p>
                            <div className="flex">
                                <span>Taks 1</span>
                                <span className="p-1 border-dotted border-gray-600 text-gray-600 border-2  hidden group-hover:flex rounded-full ml-auto rounded">
                                     <i className="fa fa-user-plus"></i>
                                </span>
                            </div>
                            <p><i className="fa fa-diagram-successor mt-2 text-gray-300 opacity-0 group-hover:opacity-100"></i></p>
                            <p className="text-gray-300 text-sm mt-4 group-hover:hidden">+ ADD SUBTASK</p>
                        </div>
                        <div className="shadow-md border-t-2 flex border-gray-100 text-gray-300 px-2 py-1 hidden group-hover:flex">
                            <div className="">                              
                                <span className="mr-3">
                                    <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-flag-o"></i>
                                </span>
                                <span className="">
                                <i className="fa fa-tags"></i> 
                                </span>
                            </div>
                            <div className="ml-auto">
                            <span className="mr-3">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-circle-thin"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-ellipsis"></i>
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="border-2 shadow-md rounded w-64 mt-4 group cursor-pointer">
                        <div className="p-2">
                            <p className="text-xs">Team space > Projects > Project 1</p>
                            <div className="flex">
                                <span>Taks 1</span>
                                <span className="p-1 border-dotted border-gray-600 text-gray-600 border-2  hidden group-hover:flex rounded-full ml-auto rounded">
                                     <i className="fa fa-user-plus"></i>
                                </span>
                            </div>
                            <p><i className="fa fa-diagram-successor mt-2 text-gray-300 opacity-0 group-hover:opacity-100"></i></p>
                            <p className="text-gray-300 text-sm mt-4 group-hover:hidden">+ ADD SUBTASK</p>
                        </div>
                        <div className="shadow-md border-t-2 flex border-gray-100 text-gray-300 px-2 py-1 hidden group-hover:flex">
                            <div className="">                              
                                <span className="mr-3">
                                    <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-flag-o"></i>
                                </span>
                                <span className="">
                                <i className="fa fa-tags"></i> 
                                </span>
                            </div>
                            <div className="ml-auto">
                            <span className="mr-3">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-circle-thin"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-ellipsis"></i>
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="ml-4  mt-2 text-sm">
                        <p>+ NEW TASK</p>
                    </div>

            </div>
            <section>
            <div className="border-2 shadow-md rounded w-64 md:ml-7 md:mt-0 mt-12 group cursor-pointer">
                        <div className="p-2">
                            <p className="text-xs">Team space > Projects > Project 1</p>
                            <div className="flex">
                                <span>Taks 1</span>
                                <span className="p-1 border-dotted border-gray-600 text-gray-600 border-2  hidden group-hover:flex rounded-full ml-auto rounded">
                                     <i className="fa fa-user-plus"></i>
                                </span>
                            </div>
                            <p><i className="fa fa-diagram-successor mt-2 text-gray-300 opacity-0 group-hover:opacity-100"></i></p>
                            <p className="text-gray-300 text-sm mt-4 group-hover:hidden">+ ADD SUBTASK</p>
                        </div>
                        <div className="shadow-md border-t-2 flex border-gray-100 text-gray-300 px-2 py-1 hidden group-hover:flex">
                            <div className="">                              
                                <span className="mr-3">
                                    <i className="fa fa-calendar-o"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-flag-o"></i>
                                </span>
                                <span className="">
                                <i className="fa fa-tags"></i> 
                                </span>
                            </div>
                            <div className="ml-auto">
                            <span className="mr-3">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-circle-thin"></i>
                                </span>
                                <span className="mr-3">
                                    <i className="fa fa-ellipsis"></i>
                                </span>
                            </div>

                        </div>
                    </div>
            </section>
            </div>
            </section>
         <Task />
        </>
     );
}
 
export default Board;