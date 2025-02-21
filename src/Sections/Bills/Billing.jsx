import { Add, FileUpload } from "@mui/icons-material";
import { useState } from "react";
import { BillingTable } from "../../Tables";
import { BillingCards } from "../../Cards";
import { bills, billingCards } from "../../constants";
import { Link } from "react-router-dom";

const Billing = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="dark:bg-gray-900 min-h-screen p-10 bg-white">
        {" "}
        <div className="bg-white flex flex-row items-center p-4 dark:bg-gray-900">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
            RA Billing Management
          </h1>
          <div className="flex flex-row space-x-4 ml-auto ">
            <Link
              className="flex items-center p-2.5  bg-blue-500 rounded-sm"
              to="/new-bill">
              <div className="flex items-center space-x-2 w-40 cursor-pointer">
                <Add sx={{ color: "white" }} />
                <h3 className="font-medium text-base text-white">
                  Create New Bill
                </h3>
              </div>
            </Link>
            <div className="flex items-center p-2.5 border bg-white  border-gray-300 rounded-sm dark:bg-gray-500 cursor-pointer">
              <FileUpload sx={{ color: "black" }} />
              <h3 className="font-medium text-base text-gray-900 ml-2 dark:text-black ">
                Export Bills
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
          <form className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3">
            <label
              htmlFor="project"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              Project
            </label>
            <select
              id="project"
              className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue>All Projects</option>
              <option value="res">Green Valley Complex</option>
              <option value="com">Metro Station</option>
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
              <option value="prog">Approved</option>
              <option value="hold">Pending</option>
              <option value="done">Paid</option>
            </select>
          </form>
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
          <div className="max-w-sm mx-auto w-[100] md:w-1/2 xl:w-1/3 ">
            <label
              htmlFor="search"
              className="block mb-2 text-sm font-medium text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-300">
              Search
            </label>
            <input
              id="search"
              placeholder="Search Bills..."
              className="bg-gray-50 border border-gray-400 dark:bg-gray-700 dark:text-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>
        </div>
        <BillingCards cards={billingCards} />
        <BillingTable bills={bills} />
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
    </>
  );
};

export default Billing;
