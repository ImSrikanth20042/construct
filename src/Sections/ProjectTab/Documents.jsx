import { Add, FileUpload } from "@mui/icons-material";
import PDocs from "../../Tables/PDocs";
import { pDocs } from "../../constants";
const Documents = () => {
  return (
    <div className="dark:bg-gray-900 h-screen p-10 bg-white">
      {" "}
      <div className="bg-white flex flex-row items-center p-4  dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Project Documents
        </h1>
        <div className="flex flex-row space-x-4 ml-auto">
          <div className="flex items-center p-3  bg-blue-500 rounded-xl cursor-pointer">
            <div className="flex items-center space-x-2 ">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-nowrap text-white w-25">
                New Folder
              </h3>
            </div>
          </div>
          <div className="flex items-center p-2.5 border bg-white border-gray-300 rounded-xl dark:bg-gray-500 cursor-pointer">
            <FileUpload sx={{ color: "black" }} />
            <h3 className="font-medium text-base text-nowrap text-gray-900 ml-2 dark:text-black">
              Upload Document
            </h3>
          </div>
        </div>
      </div>
      <div></div>
      <div className="shadow-sm dark:shadow-gray-300 rounded-lg text-center p-1 m-1 mb-0">
        <div className="flex justify-evenly items-center flex-row bg-white border border-gray-300 dark:border-gray-400 dark:bg-gray-800 rounded-lg mt-2 mb-2 p-5">
          <form className="max-w-sm mx-auto w-[10%]">
            <input
              id="search"
              placeholder="Search documents..."
              className="bg-gray-50 border border-gray-400 dark:bg-gray-700 dark:text-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </form>
          <form className="max-w-sm mx-auto w-40">
            <select
              id="Status"
              className="bg-gray-50 border border-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue>All Types</option>
              <option value="cad">CAD</option>
              <option value="pdf">PDF</option>
              <option value="img">Images</option>
            </select>
          </form>
        </div>
        <PDocs pDocs={pDocs} />
      </div>
    </div>
  );
};

export default Documents;
