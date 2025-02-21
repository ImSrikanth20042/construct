import { Add, FileUpload } from "@mui/icons-material";
import { useState } from "react";
import { RTMCards } from "../../Cards";
import { rtmCards, rtsData } from "../../constants";
import { RTSTable } from "../../Tables";
const TimeSheet = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className=" bg-white dark:bg-gray-900">
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Timesheet Management
        </h1>
        <div className="ml-auto">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center m-1.5 p-2.5 bg-blue-500 rounded-xl cursor-pointer">
              <FileUpload sx={{ color: "inherit" }} />
              <h3 className="font-medium text-base text-gray-900 dark:text-gray-300">
                Export Report
              </h3>
            </div>
            <div className="relative space-x-4 p-2.5 m-1.5 rounded-sm flex justify-evenly border bg-white  border-gray-300 dark:bg-gray-700 cursor-pointer">
              <div className="relative flex justify-evenly">
                <Add sx={{ color: "white" }} />
                <h3 className="font-medium text-base text-white">Add Entry</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <div className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
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
          <select
            id="site"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Projects</option>
            <option value="A">Building A</option>
            <option value="B">Complex B</option>
            <option value="C">Site C</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <select
            id="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Types</option>
            <option value="emp">Employee</option>
            <option value="con">Contractor</option>
            <option value="lab">Laborer</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <select
            id="Status"
            className="bg-gray-50 border border-gray-300 dark:text-gray-200 dark:bg-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </form>
      </div>
      <RTMCards cards={rtmCards} />
      <RTSTable data={rtsData} />
    </div>
  );
};

export default TimeSheet;
