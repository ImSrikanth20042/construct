import { EditOutlined } from "@mui/icons-material";

const ShiftCards = ({ shifts, schedule }) => {
  return (
    <>
      <div className=" m-2.5 p-3 max-w-full  flex justify-evenly gap-5 text-gray-900 dark:text-gray-200">
        {shifts.map((shift, index) => (
          <div
            className="w-full md:w-1/2 xl:w-1/3 p-3 mb-3 dark:bg-gray-800 bg-white rounded-lg"
            key={index}>
            <div className="flex items-stretch justify-between mb-3 p-1.5 dark:text-gray-200 text-gray-900 ">
              <h3 className="font-bold text-lg">{shift.type} Shift</h3>
              <EditOutlined className="ml-auto" />
            </div>
            <div className="flex mb-2">
              <span className="w-1/2">Shift ID: {shift.id}</span>
            </div>
            <div className="flex flex-col font-light">
              <div className="flex mb-2">
                <h5 className="w-1/2">Timing:</h5>
                <span className="ml-auto font-bold">{shift.time}</span>
              </div>
              <div className="flex mb-2">
                <h5 className="w-1/2">Break:</h5>
                <span className="ml-auto font-bold">{shift.break}</span>
              </div>
              <div className="flex mb-2">
                <h5 className="w-1/2">Site:</h5>
                <span className="ml-auto font-bold">{shift.site}</span>
              </div>
              <div className="flex mb-2">
                <h5 className="w-1/2">Employees:</h5>
                <span className="ml-auto font-bold">{shift.emp}</span>
              </div>
              <div className="flex mb-2">
                <h5 className="w-1/2">Status:</h5>
                <span className={`ml-auto p-1 ${shift.statusBg} rounded-full`}>
                  {shift.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200">
        <h2 className="text-lg font-semibold mb-4">Weekly Shift Schedule</h2>
        <div className="grid grid-cols-7 gap-4">
          {schedule.map(({ day, shift, workers }) => (
            <div
              key={day}
              className={`p-2 border rounded-lg text-center ${
                shift === "Off Day"
                  ? " dark:bg-gray-700 bg-gray-300 text-gray-500"
                  : "text-gray-800 bg-white dark:bg-gray-700 dark:text-gray-200"
              }`}>
              <p className="font-medium">{day}</p>
              {shift !== "Off Day" ? (
                <>
                  <p className="text-blue-600 font-semibold">{shift}</p>
                  <p className="text-gray-900 dark:text-gray-400">
                    {workers} workers
                  </p>
                </>
              ) : (
                <p className="text-gray-500">{shift}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ShiftCards;
