const TransactionsTable = ({ transactions }) => {
  return (
    <div className="w-full mt-10 p-1 m-1">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1 mb-1.5 dark:bg-gray-800">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                {" "}
                DATE{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                DESCRIPTION{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                CATEGORY{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                AMOUNT{" "}
              </th>

              <th scope="col" className="px-6 py-3">
                {" "}
                STATUS{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {transaction.date}
                </th>
                <td className="px-6 py-4">{transaction.description}</td>
                <td className="px-6 py-4">{transaction.category}</td>
                <td className="px-6 py-4 text-green-500 dark:text-green-300 font-bold">
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 m-2 ">
                  <span
                    className={`${transaction.statusBg} rounded-xl p-1.5 dark:text-gray-900`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
