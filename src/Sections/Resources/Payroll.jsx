import { NotificationsNone, SettingsOutlined } from "@mui/icons-material";
import Resources from "./Resources";
import Labor from "./Labor";
import { CPCards, PRActivity, PRPayments } from "../../Cards";
import { cpCards, prActivity, projectData, prPayments } from "../../constants";
import { ProjectTable } from "../../Tables";
import Contractors from "./Contractors";
import TimeSheet from "./TimeSheet";
import PayrollProcessing from "./PayrollProcessing";
import RA from "./RA";
const Payroll = () => {
  return (
    <div className="max-container max-sm:mt-3 bg-gray-50 dark:bg-gray-900 h-full sm:h-fit p-10">
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Construction Payroll Management
        </h1>

        {/* Search and Notifications */}
        <div className="flex p-1 mr-1 items-center space-x-4 mt-3 mb-5">
          {/* Search Input */}
          {/* Notification Icon */}
          <NotificationsNone className="text-gray-500 cursor-pointer hover:text-gray-700" />
          <SettingsOutlined className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
      </div>
      <CPCards cards={cpCards} />
      <div className="flex">
        <PRActivity recentTasks={prActivity} />
        <PRPayments prActivity={prPayments} />
      </div>
      <ProjectTable data={projectData} />
      <Resources />
      <Contractors />
      <Labor />
      <TimeSheet />
      <PayrollProcessing />
      <RA />
    </div>
  );
};

export default Payroll;
