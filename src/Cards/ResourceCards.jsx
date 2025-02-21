const ResourceCards = ({ cards }) => {
  return (
    <div className="flex flex-row items-center justify-evenly p-2 m-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className={
            card.title === "Upcoming Leaves"
              ? "bg-white p-6  rounded border border-gray-200/40 dark:bg-gray-800"
              : "block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-800"
          }>
          <h5
            className={
              card.title === "Upcoming Leaves"
                ? "text-lg font-semibold text-gray-800 mb-4 dark:text-gray-300 p-1 "
                : "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
            }>
            {card.title}
          </h5>
          {card.title === "Upcoming Leaves"
            ? card.data.map((leave, index) => (
                <div key={index} className="space-y-8 ">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900 m-2 p-0.5 dark:text-gray-300">
                        {leave.name}
                      </p>
                      <p className="text-xs dark:text-gray-400 p-0.5 mb-1.5 text-gray-500">
                        {leave.dates}
                      </p>
                    </div>
                    <span
                      className={`${leave.statusColor} ${leave.bgColor} ml-auto px-2 py-1 text-xs rounded-full`}>
                      {leave.status}
                    </span>
                  </div>
                </div>
              ))
            : card.data.map((data, index) => (
                <p
                  key={index}
                  className="flex items-center justify-between font-normal text-gray-700 dark:text-gray-300">
                  {data.label}
                  <span className={`${data.color} text-xl p-3 ml-auto`}>
                    {data.value}
                  </span>
                </p>
              ))}
        </div>
      ))}
    </div>
  );
};

export default ResourceCards;
