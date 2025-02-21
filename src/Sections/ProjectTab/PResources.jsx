import { Add, FileUpload } from "@mui/icons-material";
import { PResource } from "../../Cards";
import { PRTable } from "../../Tables";
import { pRMulti, pResource } from "../../constants";
const PResources = () => {
  return (
    <div className="dark:bg-gray-900 h-screen p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Project Resource Management
        </h1>
        <div className="flex flex-row space-x-4 ml-auto">
          <div className="flex items-center p-2.5 border bg-white border-gray-300 rounded-xl dark:bg-gray-500 cursor-pointer">
            <FileUpload sx={{ color: "black" }} />
            <h3 className="font-medium text-base text-nowrap text-gray-900 ml-2 dark:text-black">
              Export Report
            </h3>
          </div>
          <div className="flex items-center p-3  bg-blue-500 rounded-xl cursor-pointer">
            <div className="flex items-center space-x-2 ">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-nowrap text-white w-25">
                Add Resource
              </h3>
            </div>
          </div>
        </div>
      </div>
      <PResource cards={pRMulti} />
      <div className="shadow-sm dark:shadow-gray-300 rounded-lg text-center p-1 m-1 mb-0">
        <h3 className="text-gray-900 dark:text-gray-300 text-lg p-1 m-1">
          Active Projects
        </h3>
        <PRTable data={pResource} />
        <div className="flex flex-auto p-5 m-5">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
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
    </div>
  );
};

export default PResources;
