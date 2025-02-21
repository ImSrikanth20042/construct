const ProjectTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1.5 mb-1.5 dark:bg-gray-800">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Progress
            </th>
            <th scope="col" className="px-6 py-3">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) => (
            <tr
              key={index}
              className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
                {project.projectName} <br />
                <span className="font-light">{project.description}</span>
              </th>
              <td className={`px-6 py-4 text-${project.statusTextColor}`}>
                <span className={`${project.statusColor} rounded-3xl p-0.5`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm font-medium text-gray-500">
                  {project.progress}%
                </span>
                <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${project.progress}%` }}></div>
                </div>
              </td>
              <td className="px-6 py-4">{project.startDate}</td>
              <td className="px-6 py-4">{project.endDate}</td>
              <td className="px-6 py-4">
                {project.actions.map((action, actionIndex) => (
                  <a
                    key={actionIndex}
                    href="#"
                    className="font-medium mr-2 text-blue-600 dark:text-blue-500 hover:underline">
                    {action}
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
