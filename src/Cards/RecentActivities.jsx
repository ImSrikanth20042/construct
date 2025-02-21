const RecentActivities = ({ recentActivities }) => {
  return (
    <div className="bg-white m-2.5 p-1 shadow-lg p-4 w-full dark:bg-gray-800 rounded-lg">
      <h3 className="font-medium text-2xl p-0.5 mb-1 text-gray-900 dark:text-gray-200">
        Recent Activities
      </h3>
      {recentActivities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-3 p-1.5">
          <div className="flex-wrap justify-between ">
            <activity.icon
              sx={{ color: activity.color }}
              className={`${activity.bgColor} mr-5 rounded-sm`}
            />
            <span className="font-medium text-base text-gray-900 dark:text-gray-300">
              {activity.text}
            </span>
          </div>
          <span className="text-gray-500 p-0.5 dark:text-gray-300">
            {activity.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
