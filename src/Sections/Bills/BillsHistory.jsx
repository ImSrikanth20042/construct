import { Search } from "@mui/icons-material";
import { BillingTable } from "../../Tables";
import { bills } from "../../constants";
const BillsHistory = () => {
  return (
    <div className="dark:bg-gray-900 h-screen p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-300">
          Bill History
        </h1>
      </div>
      <p className="ml-4 mt-0">View and manage all construction bills</p>
      <div className="flex flex-row space-x-4 justify-end">
        <div className="justify-self-end p-1.5">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search bills..."
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
              <option defaultValue>All Status</option>
              <option value="done">Completed</option>
              <option value="hold">Pending</option>
              <option value="forbid">Cancelled</option>
            </select>
          </form>
        </div>
      </div>
      <BillingTable bills={bills} />
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

export default BillsHistory;
