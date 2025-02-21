const InventoryTable = ({ items }) => {
  return (
    <div className="w-full mt-10 p-2 m-2">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5 dark:bg-gray-800">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                {" "}
                ITEM CODE{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                NAME{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                CATEGORY{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                QUANTITY{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                UNIT{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                STATUS{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                ACTIONS{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {item.item}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4 text-green-500 dark:text-green-300 font-bold">
                  {item.quantity}
                </td>
                <td className="px-6 py-4">{item.unit}</td>
                <td className="px-6 py-4 m-2">{item.status}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-500 hover:underline">
                    {" "}
                    Edit{" "}
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-600 hover:underline">
                    {" "}
                    Delete{" "}
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

export default InventoryTable;
