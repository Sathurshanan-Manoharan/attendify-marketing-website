import React from 'react';
import RFID from "../assets/RFID.png";
import onlineAttendance from "../assets/onlineAttendance.png";
import storingAttendance from "../assets/storingAttendance.png";
import timetable from "../assets/timetable.png";
import reports from "../assets/reports.png";
import roleBased from "../assets/roleBased.png";
import notification from "../assets/notification.png";
import  database from "../assets/database.png";

const Features = () => {
    return (
        <section className="bg-gray-100 font-Raleway">
                    <div className="mx-auto max-w-screen-sm text-center  ">
                        <h2 className="mb-4 text-4xl tracking-tight font-Raleway font-bold text-primary">
                            Features
                        </h2>
                        <p className="font-light text-gray-900 lg:mb-16 sm:text-xl ">
                        Discover how we're enhancing your experience with our innovative features.
                        Explore below to see how we're transforming the way you.
                        </p>
                    </div>
                    {/* Add a break after the heading */}
                    <div className="flex flex-wrap justify-center">
                        <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250"style={{ width: '200px', height: '200px'}}>
                            <img style={{ width: '160px', height: '130px', paddingLeft:"50px", paddingTop:'30px'}} src={RFID} alt="Service 1" />
                            <div className="px-6 py-4"> 
                                <h6 className="text-s font-bold text-center ">RFID Attendance Marking</h6>
                            </div>
                        </div>
                        <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250"style={{ width: '200px', height: '200px'}}>
                            <img style={{ width: '160px', height: '130px',paddingTop:"30px" , paddingLeft:"50px" }} src={onlineAttendance} alt="Service 2" />
                            <div className="px-6 py-4">
                                <h3 className="text-s font-bold mb-2 text-center">Online Attendance Tracking</h3>
                            </div>
                        </div>
                        <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250" style={{ width: '200px', height: '200px'}}>
                            <img style={{ width: '150px', height: '130px',paddingTop:"30px" , paddingLeft:"50px" }} src={storingAttendance} alt="Service 3" />
                            <div className="px-6 py-4">
                                <h3 className="text-s font-bold mb-2 text-center">Storing Attendance Records</h3>
                            </div>
                        </div>
                        <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250"  style={{ width: '200px', height: '200px'}} >
                            <img style={{ width: '180px', height: '130px',paddingTop:"25px" , paddingLeft:"30px" }} src={timetable} alt="Service 4" />
                            <div className="px-6 py-4">
                                <h3 className="text-s font-bold mb-2 text-center">Integration with Timetables</h3>
                            </div>
                        </div>
                </div>
                {/* Duplicate the container div with the first 4 cards */}
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250"  style={{ width: '200px', height: '200px'}}>
                        <img style={{ width: '180px', height: '120px',paddingTop:"35px" , paddingLeft:"30px" }} src={reports} alt="Service 5" />
                        <div className="px-6 py-4">
                            <h3 className="text-s font-bold mb-2 text-center">Generating Reports</h3>
                        </div>
                    </div>
                    <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250" style={{ width: '200px', height: '200px'}}>
                        <img style={{ width: '150px', height: '120px',paddingTop:"25px" , paddingLeft:"50px"}} src={roleBased} alt="Service 6" />
                        <div className="px-6 py-4">
                            <h3 className="text-s font-bold mb-2 text-center">Role-Based Access</h3>
                        </div>
                    </div>
                    <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250" style={{ width: '200px', height: '200px'}}>
                        <img style={{ width: '145px', height: '115px' ,paddingTop:"30px" , paddingLeft:"60px"}}src={notification} alt="Service 7" />
                        <div className="px-6 py-4">
                            <h3 className="text-s font-bold mb-2 text-center">Parent Notification System</h3>
                        </div>
                    </div>
                    <div className="max-w-xs mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-20px] transition duration-250" style={{ width: '200px', height: '200px'}}>
                        <img style={{ width: '600px', height: '120px' ,paddingTop:"30px", paddingLeft:"2px"}} src={database} alt="Service 8" />
                        <div className="px-6 py-4">
                            <h3 className="text-s font-bold mb-2 text-center">Centralized Data Management</h3>
                        </div>
                    </div>
                </div>
        </section>

    );
};

export default Features;
