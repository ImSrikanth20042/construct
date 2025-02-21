import { Add, Search } from "@mui/icons-material";
import { pOverview } from "../../constants";
import POverview from "../../Cards/POverview";

const Overview = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900 items-center h-screen justify-between p-10 bg-white">
      <div className=" flex justify-between w-full items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Dashboard Title */}

        <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-5 dark:text-gray-200 ml-2">
          Project Overview
        </h1>

        {/* Search and Notifications */}
        <div className="flex p-1 mr-1 items-center space-x-4 mt-5 mb-5">
          {/* Search Input */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search projects..."
              className="pl-4 pr-10 py-2 rounded-md border dark:text-gray-200 dark:bg-gray-700 bg-gray-300 text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
            />
            <Search className="absolute right-3 top-2.5  dark:text-gray-200 text-gray-700" />
          </div>
          <div className="flex items-center space-x-4 p-2.5 bg-blue-500 rounded-lg mr-4 cursor-pointer">
            <div className="relative flex justify-evenly">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-white">New Project</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mb-5 mt-3 mr-auto">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
              aria-current="page">
              All Projects (12)
            </a>
          </li>
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              In Progress (8)
            </a>
          </li>
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Planning (2)
            </a>
          </li>
          <li className="mx-2 mb-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Completed (2)
            </a>
          </li>
        </ul>
      </div>
      <POverview overview={pOverview} />
      <div className="flex flex-auto p-5 m-5 w-full">
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

export default Overview;
