import { Add, FileUpload } from "@mui/icons-material";
import { ScheduleChart, ScheduleTable } from "../../Tables";
import { taskLists } from "../../constants";
const Schedule = () => {
  return (
    <div className="dark:bg-gray-900 h-screen p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Project Schedule
        </h1>
        <div className="flex flex-row space-x-4 ml-auto">
          <div className="flex items-center p-2.5 bg-blue-500 rounded-sm cursor-pointer">
            <div className="flex items-center space-x-2 ">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-white w-20">
                Add Item
              </h3>
            </div>
          </div>
          <div className="flex items-center p-2.5 border bg-white border-gray-300 rounded-sm dark:bg-gray-500 cursor-pointer">
            <FileUpload sx={{ color: "black" }} />
            <h3 className="font-medium text-base text-gray-900 ml-2 dark:text-black">
              Export
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-5 mb-5 mt-3 mr-auto border border-gray-500 rounded-xl">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
              aria-current="page">
              Day
            </a>
          </li>
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Week
            </a>
          </li>
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Month
            </a>
          </li>
        </ul>
      </div>
      <ScheduleChart tasks={taskLists} />
      <div className="shadow-sm dark:shadow-gray-300 rounded-lg text-center p-1 m-1 mb-0">
        <h3 className="text-gray-900 dark:text-gray-300 text-lg p-1 m-1">
          Tasks List
        </h3>
        <ScheduleTable data={taskLists} />
      </div>
    </div>
  );
};

export default Schedule;
