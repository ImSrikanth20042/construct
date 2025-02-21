import { Add, FileUpload } from "@mui/icons-material";
import {
  costCategories,
  pCosts,
  monthlySpending,
  transactions,
} from "../../constants";
import { CostCategories, PCosts, MonthlySpending } from "../../Cards";
import { TransactionsTable } from "../../Tables";
const Costs = () => {
  return (
    <div className="dark:bg-gray-900 h-full p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Project Cost Management
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
                Add Expense
              </h3>
            </div>
          </div>
        </div>
      </div>
      <PCosts costs={pCosts} />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 m-5 p-2">
        <CostCategories costCategories={costCategories} />
        <MonthlySpending monthlySpending={monthlySpending} />
      </div>
      <div className="shadow-sm dark:shadow-gray-300 rounded-lg text-center p-1 m-1 mb-0">
        <h3 className="text-gray-900 dark:text-gray-300 text-lg p-0.5 m-1">
          Recent Transactions
        </h3>
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
};

export default Costs;
