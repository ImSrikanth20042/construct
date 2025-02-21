import { reportCards, reportData } from "../constants";
import ReportsTable from "../Tables/ReportsTable";
import { ReportsCards } from "../Cards";
const ReportsAnalytics = () => {
  return (
    <div className="flex-nowrap bg-white justify-between   dark:bg-gray-900 w-full min-h-screen p-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-5 ml-1.5 dark:text-white m-2 ">
        Reports & Analytics
      </h1>
      <hr />
      <ReportsCards cards={reportCards} />

      <div className="flex flex-col justify-between border-2 border-gray-400 rounded-xl items-center bg-white mt-2 mb-2 p-5 dark:bg-gray-900">
        <h2 className="text-xl font-semibold text-gray-800 m-1.5 p-1.5 mr-auto dark:text-white">
          Generate Custom Report
        </h2>
        <div className="flex justify-evenly w-full m-1 p-5">
          <form className="w-80">
            <label
              htmlFor="project"
              className="block mb-2 text-sm font-medium dark:text-gray-100 text-gray-950">
              Report Type
            </label>
            <select
              id="project"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue>Financial Summary</option>
              <option value="res">Resource Allocation</option>
              <option value="progress">Project Progress</option>
              <option value="status">Compliance Status</option>
            </select>
          </form>
          <form className="w-80">
            <label
              htmlFor="Status"
              className="block mb-2 text-sm font-medium dark:text-gray-100 text-gray-900">
              Date Range
            </label>
            <select
              id="Status"
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="45">Last Quarter</option>
              <option value="range">Custom Range</option>
            </select>
          </form>
          <button
            type="button"
            className="bg-blue-500 border border-blue-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 py-2 px-4 dark:border-blue-600 dark:bg-blue-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            Generate Report
          </button>
        </div>
      </div>

      <ReportsTable data={reportData} />
      <div className="flex flex-auto p-5 m-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            100
          </span>{" "}
          Entries
        </span>
        <nav className="ml-auto">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
