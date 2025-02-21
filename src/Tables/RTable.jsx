import { Share, Download } from "@mui/icons-material";

const RTable = ({ pRTable }) => {
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800 mt-1.5 mb-1.5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Report Name
              </th>
              <th scope="col" className="px-6 py-3">
                Generated Date
              </th>
              <th scope="col" className="px-6 py-3">
                Type
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
            {pRTable.map((pr, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {pr.name}
                </th>

                <td className="px-6 py-4 text-blue-500 font-bold dark:text-blue-300">
                  {pr.date}
                </td>
                <td className="px-6  py-4">
                  <span
                    className={`${pr.typeBg} p-1 rounded-lg dark:text-gray-900`}>
                    {pr.type}
                  </span>
                </td>

                <td className="px-6 py-4 text-green-500 font-bold dark:text-green-300">
                  <span
                    className={`${pr.statusBg} p-1 rounded-lg dark:text-gray-900`}>
                    {pr.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-300 hover:underline">
                    <Download />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-300 hover:underline">
                    <Share />
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

export default RTable;
