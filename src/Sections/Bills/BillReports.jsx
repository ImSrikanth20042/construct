import {
  billChart,
  billRACards,
  billsActivity,
  billStats,
} from "../../constants";
import { BRCards, BillStats, BillsActivity } from "../../Cards";
import { BillChart } from "../../Tables";
const BillReports = () => {
  return (
    <div className="dark:bg-gray-900 h-full p-10 bg-white">
      <div className="bg-white flex flex-row items-center p-4 dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Reports & Analytics
        </h1>
      </div>
      <div className="bg-white flex flex-row items-center p-4 dark:bg-gray-900">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          View detailed reports and statistics of your construction bills
        </p>
      </div>
      <BRCards cards={billRACards} />
      <BillChart billChart={billChart} />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 m-5 p-2">
        <BillStats billStats={billStats} />
        <BillsActivity billsActivity={billsActivity} />
      </div>
    </div>
  );
};

export default BillReports;
