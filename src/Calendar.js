import { useState } from "react";
import Navbar from "./Navbar";
import NavSec from "./NavSec";
import Task from "./DownTask";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // Import the default calendar styles
import "./style.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  console.log(date)

  const tileContentFunction = ({ date }) => {
    // Calculate or fetch the content you want to display for each day
    const content = "" + date.getDate(); // Replace this with your content logic
  
    return (
     <>
      
        {content && <div className="hover-content">{content}</div>}
        </>
    );
  };
  const tileClassNameFunction = ({ date }) => {
    const isCurrentDate = date.toDateString() === new Date().toDateString();
    return isCurrentDate ? "day-cell current-day" : "day-cell";
  };

  return (
    <>
     <Navbar />
        <NavSec />
      <div className=" flex items-center justify-center bg-gray-white  overflow-x-scroll ">
        {/* style={{ height: "400px" }} */}
        <div className="bg-white  rounded shadow-md overflow-y-scroll    border-r-2 pr-2 scrollbar-style"  style={{ height: "750px" }}  >  
        <div className="days-header">
            <p>Sunday</p>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
          </div>
          <Calendar
            onChange={setDate}
            className="border-2 w-300 h-400"
            // value={date}
            // tileClassName="day-cell"
            calendarType="US"
            formatShortWeekday={(locale, value) =>
                new Intl.DateTimeFormat(locale, { weekday: "long" }).format(value)
              }
            // showNeighboringMonthDays={false}
            // showWeekNumbers={false}
            tileContent={tileContentFunction}
            tileClassName={tileClassNameFunction}

          />  
        </div>
       <div className="grid grid-row3 text-center p-0 border-l-2  h-full">
                <div className="mb-32">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="rotate-90 flex mb-44"><b>6</b> Unscheduled</div>
                <div className="rotate-90 flex mb-44"><b>0</b> Overdue</div>


       </div>
      </div>
      <Task />
    </>
  );
};

export default CalendarPage;