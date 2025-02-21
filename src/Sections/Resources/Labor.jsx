import { Add, FileUpload, Search } from "@mui/icons-material";
import { LaborTable } from "../../Tables";
import { laborData, lamCards, resourceCards } from "../../constants";
import { ResourceCards, LAMCards } from "../../Cards";

const Labor = () => {
  return (
    <div className="bg-white h-fit min-h-screen p-10 dark:bg-gray-900">
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Labor Management
        </h1>
        <div className="ml-auto">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center m-1.5 p-2.5 bg-blue-500 rounded-xl cursor-pointer">
              <div className="relative flex justify-evenly">
                <Add sx={{ color: "white" }} />
                <h3 className="font-medium text-base text-white">
                  New Project
                </h3>
              </div>
            </div>
            <div className="relative space-x-4 p-2.5 m-1.5 rounded-sm flex justify-evenly border bg-white  border-gray-300 dark:bg-gray-700 cursor-pointer">
              <FileUpload sx={{ color: "inherit" }} />
              <h3 className="font-medium text-base text-gray-900 dark:text-gray-300">
                Export
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <div className="justify-self-end p-1.5">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search laborers..."
              className="pl-4 pr-10 py-2 rounded-md dark:text-gray-200 text-gray-900 bg-gray-400 dark:bg-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
            />
            <Search className="absolute right-3 top-2.5 text-gray-900 " />
          </div>
        </div>
        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
          <select
            id="site"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Sites</option>
            <option value="A">Site A</option>
            <option value="B">Site B</option>
            <option value="C">Site C</option>
          </select>
        </form>

        <form className="max-w-sm mx-auto w-full bg-white border-gray-100 dark:bg-gray-700 rounded-md">
          <select
            id="filter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:text-gray-200 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>All Skills</option>
            <option value="mason">Mason</option>
            <option value="carpenter">Carpenter</option>
            <option value="helper">Helper</option>
          </select>
        </form>

        <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
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
      <LAMCards cards={lamCards} />
      <LaborTable data={laborData} />
      <ResourceCards cards={resourceCards} />
    </div>
  );
};

export default Labor;
