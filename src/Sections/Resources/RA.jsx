import { FileDownloadOutlined } from "@mui/icons-material";
import { rraCards, rraData } from "../../constants";
import { RRACards } from "../../Cards";
import { RRATable } from "../../Tables";
const RA = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Reports & Analytics
        </h1>
        <div className="ml-auto">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center m-1.5 p-2.5 bg-green-500 rounded-xl cursor-pointer">
              <FileDownloadOutlined sx={{ color: "inherit" }} />
              <h3 className="font-medium text-base text-gray-900 dark:text-gray-300">
                Export Reports
              </h3>
            </div>
          </div>
        </div>
      </div>
      <RRACards cards={rraCards} />
      <RRATable data={rraData} />
    </div>
  );
};

export default RA;
