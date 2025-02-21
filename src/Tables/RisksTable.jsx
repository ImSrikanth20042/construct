import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
const RisksTable = ({ risks }) => {
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 mt-1.5 mb-1.5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Probability
              </th>
              <th scope="col" className="px-6 py-3">
                Impact
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {risk.id}
                </th>

                <td className="px-6 py-4 text-blue-500 font-bold dark:text-blue-300">
                  {risk.description}
                </td>
                <td className="px-6  py-4">
                  <span
                    className={`${risk.categoryBg} p-1 rounded-lg dark:text-gray-900`}>
                    {risk.category}
                  </span>
                </td>
                <td className="px-6 py-4">{risk.probability}</td>
                <td className="px-6 py-4">{risk.impact}</td>
                <td className="px-6 py-4 text-green-500 font-bold dark:text-green-300">
                  <span
                    className={`${risk.statusBg} p-1 rounded-lg dark:text-gray-900`}>
                    {risk.status}
                  </span>
                </td>

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

export default RisksTable;
