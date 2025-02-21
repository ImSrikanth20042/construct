import { Add } from "@mui/icons-material";
import { RCMCards } from "../../Cards";
import { rcmCards, rcmTable } from "../../constants";
import RCMTable from "../../Tables/RCMTable";
const Contractors = () => {
  return (
    <div>
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Title */}

        <h1 className="text-2xl font-semibold text-gray-800 m-3 dark:text-gray-200 ml-2">
          Contractors Management
        </h1>
        <div className="ml-auto justify-between flex px-3 py-0 items-center gap-3">
          <div className="rounded-lg flex shadow-lg font-light text-white dark:text-white bg-blue-700 p-2">
            <Add />
            <h4>Add Contractor</h4>
          </div>
        </div>
      </div>
      <RCMCards cards={rcmCards} />
      <RCMTable data={rcmTable} />
    </div>
  );
};

export default Contractors;
