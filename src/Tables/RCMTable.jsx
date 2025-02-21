const RCMTable = ({ data }) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5 dark:bg-gray-800">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                CONTRACTOR
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                SPECIALTIY
              </th>
              <th scope="col" className="px-6 py-3">
                PROJECT
              </th>
              <th scope="col" className="px-6 py-3">
                RATE
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((contractor, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {contractor.contractorName} <br />
                  <span className="font-light">{contractor.mail}</span>
                </th>
                <td className="px-6 py-4">{contractor.id}</td>
                <td className="px-6 py-4">{contractor.speciality}</td>
                <td className="px-6 py-4">{contractor.project}</td>
                <td className="px-6 py-4">{contractor.wage}</td>
                <td className={`px-6 py-4 text-${contractor.statusTextColor}`}>
                  <span className={`${contractor.statusBg} rounded-3xl p-0.5`}>
                    {contractor.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-300 hover:underline">
                    View
                  </a>
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-300 hover:underline">
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-400 hover:underline">
                    End
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-auto p-3">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            100
          </span>{" "}
          Entries
        </span>
        <nav className="ml-auto">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RCMTable;
