const PRTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5 dark:bg-gray-800">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Resource Name
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              resource
            </th>
            <th scope="col" className="px-6 py-3">
              Allocation
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
          {data.map((resource, index) => (
            <tr
              key={index}
              className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                {resource.name} <br />
                <span className="font-light">ID:{resource.id}</span>
              </th>
              <td className="px-6 py-4">{resource.type}</td>
              <td className="px-6 py-4">{resource.project}</td>
              <td className="px-6 py-4">
                <span className="text-sm font-medium text-gray-500">
                  {resource.progress}%
                </span>
                <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${resource.progress}%` }}></div>
                </div>
              </td>
              <td className={`px-6 py-4 t`}>
                <span className={`${resource.statusBg} rounded-3xl p-0.5`}>
                  {resource.status}
                </span>
              </td>

              <td className="px-6 py-4 ">
                <a
                  href="#"
                  className="font-medium mr-2 text-blue-600 dark:text-blue-300 hover:underline">
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-400 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PRTable;
