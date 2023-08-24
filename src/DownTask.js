import "./style.css"
const Task = () => {
    return ( 
        <>
                <div className="DownTask cursor-pointer">
                    <div className="flex">
                    <div className="p-2 bg-purple-400 rounded-md text-white mr-4"><i class="fa-solid fa-plus"></i> Task</div>   
                    <div className="p-2 bg-white taskBeside rounded-md shadow-md">
                        <i className="fa fa-microchip"></i>
                    </div>
                    </div>
                </div>
                <div className="flex p-2 bg-purple-400 rounded-lg text-white cursor-pointer DownLeftTask">
                        <span>
                            <i className="fa fa-plane mr-2 "></i>
                            <span className="bg-white rounded-lg text-purple-400 text-sm px-1">1/2</span>
                        </span>
                </div>
        </>
     );
}
 
export default Task;