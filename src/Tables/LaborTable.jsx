const LaborTable = ({ data }) => {
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5 dark:bg-gray-800">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                {" "}
                LABOR{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                ID{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                SKILL{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                SITE{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                MOBILE NO.{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                DAILY WAGE{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                Status{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                PROJECT{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                ACTIONS{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((labor, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                  {labor.name} <br />
                  <span className="font-light">Started: {labor.date}</span>
                </th>
                <td className="px-6 py-4">{labor.id}</td>
                <td className="px-6 py-4">{labor.skill}</td>
                <td className="px-6 py-4">{labor.site}</td>
                <td className="px-6 py-4">{labor.number}</td>
                <td className="px-6 py-4">{labor.wage}</td>
                <td className="px-6 py-8 text-gray-600">
                  <span className={`${labor.statusBg} rounded-3xl p-1.5`}>
                    {" "}
                    {labor.status}{" "}
                  </span>
                </td>
                <td className="px-6 py-4">{labor.project}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-500 hover:underline">
                    {" "}
                    Edit{" "}
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
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

export default LaborTable;
