import { Avatar } from "@mui/material";

const LAMRCard = ({ recentActivities }) => {
  return (
    <div className="bg-white m-2.5 p-3 shadow-lg max-w-full dark:bg-gray-800 rounded-lg">
      <h3 className="font-medium text-2xl p-0.5 mb-1 text-gray-900 dark:text-gray-200">
        Recent Activities
      </h3>
      {recentActivities.map((activity, index) => (
        <div
          key={index}
          className="flex items-stretch justify-between mb-3 p-1.5">
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
          />
          <div className="flex-wrap justify-between ">
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

export default LAMRCard;
