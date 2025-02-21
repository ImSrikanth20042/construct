import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";

const MachineryTable = ({ data }) => {
  return (
    <div className="w-full mt-10 p-2 m-1 sm:p-4 sm:m-2 md:p-6 md:m-3 overflow-x-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 mt-1.5 mb-1.5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                LOCATION
              </th>
              <th scope="col" className="px-6 py-3">
                LAST MAINTENANCE
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
                  {item.id}
                </th>
                <td className="px-6  py-4">{item.name}</td>
                <td className="px-6 py-4 text-green-500 font-bold dark:text-green-300">
                  {item.status}
                </td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4">{item.maintenance}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-300 hover:underline">
                    <EditOutlined />
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
export default MachineryTable;
