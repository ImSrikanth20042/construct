const PRPayments = ({ prActivity }) => {
  return (
    <div className="bg-white m-2.5 p-1 shadow-lg p-4 w-full dark:bg-gray-800 rounded-lg">
      <h3 className="font-medium text-2xl p-0.5 mb-1 text-gray-900 dark:text-gray-200">
        Upcoming Payments
      </h3>
      {prActivity.map((activity, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-3 p-1.5">
          <div className="font-medium text-gray-900 whitespace-nowrap dark:text-gray-200">
            {activity.title} <br />
            <span className="font-light dark:text-gray-300 text-gray-900 ">
              {activity.text}
            </span>
          </div>
          <span className="text-gray-500 p-0.5 dark:text-gray-300">
            {activity.rate}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PRPayments;
