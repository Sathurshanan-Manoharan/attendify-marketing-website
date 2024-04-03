import React from "react";
import RFID from "../assets/RFID.png";
import onlineAttendance from "../assets/onlineAttendance.png";
import storingAttendance from "../assets/storingAttendance.png";
import timetable from "../assets/timetable.png";
import reports from "../assets/reports.png";
import roleBased from "../assets/roleBased.png";
import notification from "../assets/notification.png";
import database from "../assets/database.png";
import { GrSchedules } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";
import { BiRfid } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { AiOutlineCloudSync } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosWarning } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="bg-gray-900 font-Raleway pb-10">
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
          <BiRfid
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <AiOutlineCloudSync
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <ImProfile
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <GrSchedules
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <TbReportAnalytics
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <FaUserCog
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <IoIosWarning
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
          <FaDatabase
            className="text-attendify-500"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
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
