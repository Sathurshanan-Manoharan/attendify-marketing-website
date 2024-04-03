import React from "react";
import RFID from "../assets/RFID.png";
import onlineAttendance from "../assets/onlineAttendance.png";
import storingAttendance from "../assets/storingAttendance.png";
import timetable from "../assets/timetable.png";
import reports from "../assets/reports.png";
import roleBased from "../assets/roleBased.png";
import notification from "../assets/notification.png";
import database from "../assets/database.png";

const Features = () => {
  return (
    <section className="bg-gray-900 font-Raleway pb-10">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-8xl tracking-tight font-Raleway text-white">
          Features
        </h2>
        <p className="font-light text-gray-400 lg:mb-8 sm:text-xl px-4 md:px-0">
          Discover how we're enhancing your experience with our innovative
          features. Explore below to see how we're transforming the way you.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "160px",
              height: "130px",
              paddingLeft: "50px",
              paddingTop: "30px",
            }}
            src={RFID}
            alt="RFID Attendance Marking"
          />
          <div className="px-6 py-4">
            <h6 className="text-white text-s font-bold text-center ">
              RFID Attendance Marking
            </h6>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-300"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "160px",
              height: "130px",
              paddingTop: "30px",
              paddingLeft: "50px",
            }}
            src={onlineAttendance}
            alt="Online Attendance Tracking"
          />
          <div className="px-2 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Online Attendance Tracking
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "150px",
              height: "130px",
              paddingTop: "30px",
              paddingLeft: "50px",
            }}
            src={storingAttendance}
            alt="Storing Attendance Records"
          />
          <div className="px-2 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Storing Attendance Records
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
            src={timetable}
            alt="Integration with Timetables"
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Integration with Timetables
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "180px",
              height: "120px",
              paddingTop: "35px",
              paddingLeft: "30px",
            }}
            src={reports}
            alt="Generating Reports"
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Generating Reports
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "150px",
              height: "120px",
              paddingTop: "25px",
              paddingLeft: "50px",
            }}
            src={roleBased}
            alt="Role-Based Access"
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Role-Based Access
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "145px",
              height: "115px",
              paddingTop: "30px",
              paddingLeft: "60px",
            }}
            src={notification}
            alt="Parent Notification System"
          />
          <div className="px-5 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Parent Notification System
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <img
            style={{
              width: "600px",
              height: "120px",
              paddingTop: "30px",
              paddingLeft: "2px",
            }}
            src={database}
            alt="Centralized Data Management"
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
              Centralized Data Management
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
