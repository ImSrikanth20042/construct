const BillingTable = ({ bills }) => {
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200 divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                BILL NO.
              </th>
              <th scope="col" className="px-6 py-3 ">
                PROJECT
              </th>
              <th scope="col" className="px-6 py-3 ">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3 ">
                AMOUNT
              </th>
              <th scope="col" className="px-6 py-3 ">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 ">
                DATE
              </th>
              <th scope="col" className="px-6 py-3 ">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {bill.billNo}
                </th>
                <td className="px-6 py-4 ">{bill.project}</td>
                <td className="px-6 py-4 ">{bill.description}</td>
                <td className="px-6 py-4 text-green-500 dark:text-green-300 font-bold">
                  {bill.amount}
                </td>
                <td className="px-6 py-4 ">{bill.status}</td>
                <td className="px-6 py-4 ">{bill.date}</td>
                <td className="px-6 py-4 ">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-600 hover:underline">
                    Print
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

export default BillingTable;
