import "./style.css"
const Task = () => {
    return ( 
        <>
                <div className="DownTask cursor-pointer">
                    <div className="flex">
                    <div className="p-2 bg-purple-400 rounded-md text-white mr-4">+ Task</div>   
                    <div className="p-2 bg-white">ok </div> 
                    </div>
                </div>
        </>
     );
}
 
export default Task;