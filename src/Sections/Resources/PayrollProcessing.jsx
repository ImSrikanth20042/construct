import {
  ArrowForwardOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";
import { RPPCards } from "../../Cards";
import { rppCards, rppData } from "../../constants";
import { RPPTable } from "../../Tables";

const PayrollProcessing = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 ">
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Payroll Processing
        </h1>
        <div className="ml-auto">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center m-1.5 p-2.5 bg-blue-500 rounded-xl cursor-pointer">
              <ArrowForwardOutlined sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-white">Run Payroll</h3>
            </div>
            <div className="flex items-center m-1.5 p-2.5 bg-green-500 rounded-xl cursor-pointer">
              <FileDownloadOutlined sx={{ color: "inherit" }} />
              <h3 className="font-medium text-base text-gray-900 dark:text-gray-300">
                Export Report
              </h3>
            </div>
          </div>
        </div>
      </div>
      <RPPCards cards={rppCards} />
      <RPPTable data={rppData} />
    </div>
  );
};

export default PayrollProcessing;
