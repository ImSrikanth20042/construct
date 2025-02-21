const POverview = ({ overview, isSidebarCollapsed }) => {
  return (
    <div className="flex-1 flex items-center justify-evenly flex-nowrap gap-6 ml-10 m-5 rounded p-5">
      {overview.map((overview, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start justify-between w-72 lg:w-80 xl:w-72 md:w-72 sm:w-72">
          {/* Header */}
          <div className="flex items-center justify-between w-full mb-4 h-fit">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 ">
              {overview.name}
            </h3>
            <p
              className={`text-sm font-medium ${overview.statusBg} rounded-full px-3 py-1 dark:text-gray-200 whitespace-nowrap`}>
              {overview.status}
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 truncate">
            {overview.sub}
          </p>

          {/* Progress Bar */}
          <div className="w-full mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Progress
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {overview.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${overview.progress}%` }}></div>
            </div>
          </div>

          {/* Due Date and Budget */}
          <div className="w-full mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Due Date
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {overview.dueDate}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ${overview.budget}
              </p>
            </div>
          </div>

          {/* View Details Link */}
          <div className="mt-4 w-full">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors duration-300">
              View details
              <svg
                className="w-3 h-3 ml-2 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default POverview;
