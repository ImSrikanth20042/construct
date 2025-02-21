const BillStats = ({ billStats }) => {
  return (
    <div className="bg-white m-2.5 shadow-lg p-4 w-full dark:bg-gray-800 rounded-lg">
      <h3 className="font-medium text-2xl dark:text-gray-200 text-gray-900 p-0.5 mb-1">
        Project Timeline
      </h3>
      {billStats.map((stat, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-900 dark:text-gray-300 m-0.5 mb-1">
              {stat.title}
            </span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 p-0.5 m-1">
              {stat.progress}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`${stat.color} h-2.5 rounded-full`}
              style={{ width: stat.progress }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BillStats;
