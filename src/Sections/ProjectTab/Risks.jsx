import { Add } from "@mui/icons-material";
import { risks } from "../../constants";
import { RisksTable } from "../../Tables";
const Risks = () => {
  return (
    <div className="dark:bg-gray-900 h-screen p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Project Risks Management
        </h1>
        <div className="flex flex-row space-x-4 ml-auto">
          <div className="flex items-center p-3  bg-blue-500 rounded-xl cursor-pointer">
            <div className="flex items-center space-x-2 ">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-nowrap text-white w-25">
                Add New Risk
              </h3>
            </div>
          </div>
        </div>
      </div>
      <form className="flex justify-evenly items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
        <div className="max-w-sm mx-auto w-40">
          <label
            htmlFor="Category"
            className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-900">
            Risk Category
          </label>
          <select
            id="Category"
            className="bg-gray-50 border border-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>Technical</option>
            <option value="schedule">Schedule</option>
            <option value="cost">Cost</option>
            <option value="resource">Resource</option>
          </select>
        </div>
        <div className="max-w-sm mx-auto  w-40">
          <label
            htmlFor="Status"
            className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-900">
            Risk Status
          </label>
          <select
            id="Status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm dark:bg-gray-900 dark:text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="open">Open</option>
            <option value="mitigated">Mitigated</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="max-w-sm mx-auto  w-40">
          <label
            htmlFor="search"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-300">
            Search
          </label>
          <input
            id="search"
            placeholder="Search risks..."
            className="bg-gray-50 border border-gray-400 dark:bg-gray-700 dark:text-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>
      </form>
      <RisksTable risks={risks} />
      <div className="flex flex-auto p-5 m-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">2</span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">2</span>{" "}
          Risks
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

export default Risks;
