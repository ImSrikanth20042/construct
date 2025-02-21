import {
  SimCardDownloadOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
const ReportsTable = ({ data }) => {
  return (
    <div className="w-full mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 ml-1.5 dark:text-white m-2 ">
        Recent Reports
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 mt-1.5 mb-1.5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                REPORT NAME
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>
              <th scope="col" className="px-6 py-3">
                GENERATED ON
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {item.name}
                </th>
                <td className="px-6  py-4">{item.type}</td>
                <td className="px-6 py-4 text-blue-300 font-bold dark:text-blue-400">
                  {item.date}
                </td>
                <td className="px-6 py-4   text-green-500 font-bold dark:text-green-30">
                  {item.status}
                </td>

                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-300 hover:underline">
                    <SimCardDownloadOutlined />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-300 hover:underline">
                    <DeleteOutlineOutlined />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTable;
