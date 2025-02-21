import { Add } from "@mui/icons-material";
import { PReports } from "../../Cards";
import { pReports, pRTable } from "../../constants";
import { RTable } from "../../Tables";
const Reports = () => {
  return (
    <div className="dark:bg-gray-900 h-screen p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Project Resource Management
        </h1>
        <div className="flex flex-row space-x-4 ml-auto">
          <div className="flex items-center p-3  bg-blue-500 rounded-xl cursor-pointer">
            <div className="flex items-center space-x-2 ">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-nowrap text-white">
                Generate New Report
              </h3>
            </div>
          </div>
        </div>
      </div>
      <PReports pReports={pReports} />
      <div className="shadow-sm dark:shadow-gray-300 rounded-lg text-center p-1 m-1 mb-0">
        <h3 className="text-gray-900 dark:text-gray-300 text-lg p-1 m-1">
          Recent Reports
        </h3>
        <RTable pRTable={pRTable} />
      </div>
    </div>
  );
};

export default Reports;
