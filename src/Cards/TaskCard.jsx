import { Circle } from "@mui/icons-material";

const TaskCard = ({ color, task, date }) => {
  return (
    <div className="bg-gray-100 flex p-5 items-center justify-evenly rounded-lg dark:bg-gray-800 shadow-sm">
      <Circle sx={{ color: color }} />
      <span className="font-medium text-base text-gray-900 dark:text-gray-300">
        {task}
      </span>
      <span className="text-gray-600 font-medium text-base dark:text-gray-300">
        {date}
      </span>
    </div>
  );
};
export default TaskCard;
