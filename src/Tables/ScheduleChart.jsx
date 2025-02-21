const ScheduleChart = ({ tasks }) => {
  return (
    <div className="w-full p-5">
      <table className="w-full border-collapse border border-gray-300 rounded-2xl">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300">
            <th className="border p-2">Task Name</th>
            <th className="border p-2">Oct 1</th>
            <th className="border p-2">Oct 2</th>
            <th className="border p-2">Oct 3</th>
            <th className="border p-2">Oct 4</th>
            <th className="border p-2">Oct 5</th>
            <th className="border p-2">Oct 6</th>
            <th className="border p-2">Oct 7</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            const startIndex = new Date(task.start).getDate() - 1;
            const endIndex = new Date(task.end).getDate();

            return (
              <tr
                key={index}
                className="text-center text-gray-900 dark:text-gray-300">
                <td className="border p-2 text-left">{task.task}</td>
                {[...Array(7)].map((_, i) => (
                  <td key={i} className="border p-2 relative">
                    {i >= startIndex && i < endIndex && (
                      <div
                        className={`${task.statusBg} h-6 rounded-md w-full`}></div>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleChart;
