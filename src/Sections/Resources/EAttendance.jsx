import { useState } from "react";
import {
  NotificationsNone,
  Add,
  ContentPasteOutlined,
  DescriptionOutlined,
  EventNoteOutlined,
  SimCardDownloadOutlined,
  TextSnippet,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import {
  ARCards,
  EAMCards,
  EAMRCard,
  EmployeeCards,
  ShiftCards,
} from "../../Cards";
import {
  amTable,
  aReport,
  detailedReport,
  eamCards,
  eamrActivities,
  employee,
  schedule,
  shifts,
  todayAttendance,
} from "../../constants";
import { AMTable, TodayAttendance, DRTable } from "../../Tables";

const EAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="max-container max-sm:mt-3 bg-gray-50 dark:bg-gray-900 h-full sm:h-fit p-10">
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Employee Attendance Management
        </h1>

        {/* Search and Notifications */}
        <div className="flex p-1 mr-1 items-center space-x-4 mt-3 mb-5">
          {/* Search Input */}
          {/* Notification Icon */}
          <NotificationsNone className="text-gray-500 cursor-pointer hover:text-gray-700" />
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
          />
        </div>
      </div>
      <EAMCards cards={eamCards} />
      <div className="grid grid-cols-2">
        <EAMRCard recentActivities={eamrActivities} />
        <div className="bg-white m-2.5  shadow-lg p-4 max-w-full dark:bg-gray-800 rounded-lg">
          <h4 className="font-medium text-xl p-0.5 mb-1 text-gray-900 dark:text-gray-200">
            Quick Actions
          </h4>
          <div className="grid grid-cols-2 shadow-sm gap-3">
            <div className="border shadow-sm hover:bg-gray-400 rounded-lg text-center p-4 text-gray-900 dark:text-gray-200">
              <Add />
              <h4>Add Employee</h4>
            </div>
            <div className="border dark:text-gray-200 shadow-sm hover:bg-gray-400 rounded-lg text-center p-4 text-gray-900">
              <ContentPasteOutlined />
              <h4>Mark Attendance</h4>
            </div>
            <div className="border shadow-sm hover:bg-gray-400 rounded-lg text-center p-4 text-gray-900 dark:text-gray-200">
              <DescriptionOutlined />
              <h4>Generate Report</h4>
            </div>
            <div className="border shadow-sm hover:bg-gray-400 rounded-lg text-center p-4 text-gray-900 dark:text-gray-200">
              <EventNoteOutlined />
              <h4>Manage Shifts</h4>
            </div>
          </div>
        </div>
      </div>
      <TodayAttendance employee={todayAttendance} />
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Attendance Management
        </h1>
        <div className="ml-auto justify-between flex px-3 py-0 items-center gap-3">
          <div className="rounded-lg shadow-lg font-light text-white dark:text-white bg-green-400 p-2">
            <h4>Mark Attendance</h4>
          </div>
          <div className="rounded-lg border font-light text-black dark:text-black bg-white p-2 ml-auto">
            <h4>Export Data</h4>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <div className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Date Range
          </h2>
          <div className="ml-auto relative  items-center">
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="site"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            Site
          </label>
          <select
            id="site"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Sites</option>
            <option value="A">Site A</option>
            <option value="B">Site B</option>
            <option value="C">Site C</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="filter"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Department
          </label>
          <select
            id="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Departments</option>
            <option value="con">Construction</option>
            <option value="engg">Engineering</option>
            <option value="admin">Administration</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="Status"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Status
          </label>
          <select
            id="Status"
            className="bg-gray-50 border border-gray-300 dark:text-gray-200 dark:bg-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
            <option value="leave">Leave</option>
          </select>
        </form>
      </div>
      <AMTable employee={amTable} />
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Employee Management
        </h1>
        <div className="ml-auto justify-between flex px-3 py-0 items-center gap-3">
          <div className="rounded-lg flex shadow-lg font-light text-white dark:text-white bg-blue-600 p-2.5">
            <Add />
            <h4>Add Employee</h4>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <div className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3 ">
          <label
            htmlFor="search"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-300">
            Search
          </label>
          <input
            id="search"
            placeholder="Search Employees..."
            className="bg-gray-50 border border-gray-400 dark:bg-gray-700 dark:text-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="filter"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Department
          </label>
          <select
            id="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Departments</option>
            <option value="con">Construction</option>
            <option value="engg">Engineering</option>
            <option value="admin">Administration</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="site"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            Site
          </label>
          <select
            id="site"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Sites</option>
            <option value="A">Site A</option>
            <option value="B">Site B</option>
            <option value="C">Site C</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="Status"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Status
          </label>
          <select
            id="Status"
            className="bg-gray-50 border border-gray-300 dark:text-gray-200 dark:bg-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
            <option value="leave">Leave</option>
          </select>
        </form>
      </div>
      <EmployeeCards employee={employee} />
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Shift Management
        </h1>
        <div className="ml-auto justify-between flex px-3 py-0 items-center gap-3">
          <div className="rounded-lg flex shadow-lg font-light text-white dark:text-white bg-blue-600 p-2.5">
            <Add />
            <h4>Create New Shift</h4>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="site"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            Site
          </label>
          <select
            id="site"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Sites</option>
            <option value="A">Site A</option>
            <option value="B">Site B</option>
            <option value="C">Site C</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="filter"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Department
          </label>
          <select
            id="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Departments</option>
            <option value="con">Construction</option>
            <option value="engg">Engineering</option>
            <option value="admin">Administration</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="shift"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            Shift
          </label>
          <select
            id="shift"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Shifts</option>
            <option value="mor">Morning Shift</option>
            <option value="eve">Evening Shift</option>
            <option value="night">Night Shift</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="Status"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Status
          </label>
          <select
            id="Status"
            className="bg-gray-50 border border-gray-300 dark:text-gray-200 dark:bg-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </form>
      </div>
      <ShiftCards shifts={shifts} schedule={schedule} />
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Attendance Reports
        </h1>
        <div className="ml-auto justify-between flex px-3 py-0 items-center gap-3">
          <div className="rounded-lg shadow-lg font-light flex text-white dark:text-white bg-blue-600 p-2">
            <SimCardDownloadOutlined />
            <h4>Export Report</h4>
          </div>
          <div className="rounded-lg shadow font-light flex text-black dark:text-white bg-green-600 p-2 ml-auto">
            <TextSnippet />
            <h4>Generate Report</h4>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            Date Range
          </label>
          <select
            id="date"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="custom">Custom Range</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="site"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
            Site
          </label>
          <select
            id="site"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Sites</option>
            <option value="A">Site A</option>
            <option value="B">Site B</option>
            <option value="C">Site C</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="filter"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Department
          </label>
          <select
            id="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Departments</option>
            <option value="con">Construction</option>
            <option value="engg">Engineering</option>
            <option value="admin">Administration</option>
          </select>
        </form>

        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-800">
            Report Type
          </label>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 dark:text-gray-200 dark:bg-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>Daily Summary</option>
            <option value="monthly">Monhtly Overview</option>
            <option value="late">Late Arrivals</option>
            <option value="abs">Absences</option>
          </select>
        </form>
      </div>
      <ARCards report={aReport} />
      <DRTable report={detailedReport} />
    </div>
  );
};

export default EAttendance;
