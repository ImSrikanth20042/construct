import { Add, FileUpload, Search } from "@mui/icons-material";
import { EmployeeTable } from "../../Tables";
import { employeeData, resourceCards } from "../../constants";
import { ResourceCards } from "../../Cards";

const Resources = () => {
  return (
    <div className="p-10 h-screen bg-white dark:bg-gray-900">
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Employees Management
        </h1>
      </div>

      <div className="flex flex-row justify-between items-start mt-5 mb-2.5 dark:bg-gray-900 bg-white p-1">
        <div className="flex flex-row space-x-4">
          <div className="flex items-center m-1.5 p-2.5 bg-blue-500 rounded-sm cursor-pointer">
            <div className="relative flex justify-evenly">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-white">New Project</h3>
            </div>
          </div>
          <div className="relative space-x-4 p-2.5 m-1.5 rounded-sm flex justify-evenly border bg-white  border-gray-300 dark:bg-gray-700 cursor-pointer">
            <FileUpload sx={{ color: "inherit" }} />
            <h3 className="font-medium text-base text-gray-900 dark:text-gray-300">
              Export
            </h3>
          </div>
        </div>

        <div className="flex flex-row space-x-4 justify-end">
          <div className="justify-self-end p-1.5">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search employees..."
                className="pl-4 pr-10 py-2 rounded-md dark:text-gray-200 text-gray-900 bg-gray-400 dark:bg-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
              />
              <Search className="absolute right-3 top-2.5 text-gray-900 " />
            </div>
          </div>
          <div className="justify-self-stretch p-1.5 bg-white dark:bg-gray-900 w-52">
            <form className="max-w-sm mx-auto w-full bg-white border-gray-100 dark:bg-gray-700 rounded-md">
              <select
                id="filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue>Filter By Department</option>
                <option value="con">Construction</option>
                <option value="engg">Engineering</option>
                <option value="admin">Administration</option>
              </select>
            </form>
          </div>
        </div>
      </div>

      <EmployeeTable data={employeeData} />
      <ResourceCards cards={resourceCards} />
    </div>
  );
};

export default Resources;
