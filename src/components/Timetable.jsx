    import React from "react";

    function Timetable() {
    return (
        <div className="bg-primary flex justify-between items-center p-4 font-Raleway"> 
        <div>
            <h2 className="text-xl text-white">Effortlessly Manage and View Timetables</h2> 
            <br />
            <p className="text-xs text-white opacity-75"> 
            Simplify the Task of Handling Headaches, <br />
            Whether it's for Your Students or Yourself! <br /><br />
            Effortlessly Sync Your Timetable in Real Time by Simply Uploading a CSV File!
            </p>
        </div>
        
        
        <div>
            <img src="src\assets\timetable.png" alt="Timetable" className="w-80 h-auto" /> 
        </div>
        </div>
    );
    }

    export default Timetable;
