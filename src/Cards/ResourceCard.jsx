const ResourceCard = ({ resource, current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1 ">
        <span className="text-base font-medium text-gray-900 dark:text-gray-300">
          {resource}
        </span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
          {current}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
export default ResourceCard;
