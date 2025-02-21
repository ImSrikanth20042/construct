const ScheduleTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5 dark:bg-gray-800">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Task
            </th>
            <th scope="col" className="px-6 py-3">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Stauts
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => (
            <tr
              key={index}
              className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                {task.task} <br />
              </th>

              <td className="px-6 py-4">{task.start}</td>
              <td className="px-6 py-4">{task.end}</td>
              <td className="px-6 py-4">{task.duration}</td>
              <td className={`px-6 py-4 dark:text-gray-900`}>
                <span className={`${task.statusBg} rounded-xl p-1`}>
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
