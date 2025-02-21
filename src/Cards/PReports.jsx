import { FileDownload } from "@mui/icons-material";

const PReports = ({ pReports }) => {
  return (
    <div className="flex-1 flex items-center justify-evenly flex-nowrap gap-6 ml-10 m-5 rounded p-5">
      {pReports.map((report, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between w-80 lg:w-1/5 xl:w-1/2 md:w-1/2 sm:w-1/2 dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {report.type}
          </h3>
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full p-2.5 border bg-white border-gray-300 rounded-xl dark:bg-gray-500">
              <h3 className="font-medium text-base text-nowrap text-gray-900 ml-2 dark:text-black">
                {report.rOne}
              </h3>
              <FileDownload sx={{ color: "black" }} className="ml-auto" />
            </div>
            <div className="flex w-full p-2.5 border bg-white border-gray-300 rounded-xl dark:bg-gray-500">
              <h3 className="font-medium text-base text-nowrap text-gray-900 ml-2 dark:text-black">
                {report.rTwo}
              </h3>
              <FileDownload sx={{ color: "black" }} className="ml-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PReports;
