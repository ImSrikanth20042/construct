import { NotificationsNone, Search } from "@mui/icons-material";
import { CMulti } from "../../Cards";
const Contractors = () => {
  return (
    <section className="max-container max-sm:mt-8 bg-white fit-content dark:bg-gray-900 h-full p-10">
      <div className=" flex justify-between items-center px-0 py-0 bg-white mt-0 dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-5 ml-1.5 dark:text-gray-200">
          {/*Contractor Heading */}
          Contractor Dashboard
        </h1>
        <div className="flex p-1 mr-1 items-center space-x-4 mt-5 mb-5">
          {/* Search Input */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-md border dark:text-gray-200 dark:bg-gray-700 bg-gray-300 text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
            />
            <Search className="absolute right-3 top-2.5  dark:text-gray-200 text-gray-700" />
          </div>

          {/* Notification Icon */}
          <NotificationsNone className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
        <CMulti />
      </div>
    </section>
  );
};

export default Contractors;
