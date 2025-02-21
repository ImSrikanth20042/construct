const PCosts = ({ costs }) => {
  return (
    <div
      className={`flex grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 
  gap-6 ml-10 m-5 rounded mt-10 justify-items-center`}>
      {costs.map((cost, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64 lg:w-1/5 xl:w-1/2 md:w-1/2 sm:w-1/2 dark:bg-gray-800">
          <div>
            <h3 className="text-lg text-nowrap font-semibold text-gray-800 dark:text-gray-200">
              {cost.title}
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2 dark:text-gray-300">
              {cost.value}
            </p>
            <p className="text-sm text-gray-600 mt-1 font-medium dark:text-gray-300">
              <span className={`font-light ${cost.changeColor}`}>
                {cost.percentageChange}
              </span>{" "}
            </p>
          </div>
          <cost.icon sx={{ color: cost.iconColor, fontSize: 35 }} />
        </div>
      ))}
    </div>
  );
};

export default PCosts;
