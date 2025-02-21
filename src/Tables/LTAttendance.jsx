import { Avatar } from "@mui/material";
const LTAttendance = ({ labor }) => {
  return (
    <div className="w-full mt-10 p-1 m-1">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-1 mb-1.5 dark:bg-gray-800">
        <h3 className="p-3 dark:text-gray-300 text-gray-900">{`Today's Attendance Overview`}</h3>
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-200">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                {" "}
                LABOR{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                STATUS{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                CHECK IN{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                CHECK OUT{" "}
              </th>

              <th scope="col" className="px-6 py-3">
                {" "}
                SITE{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {labor.map((l, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 dark:bg-gray-600 border-b dark:border-gray-500 border-gray-200 dark:text-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-gray-200 flex">
                  <div>
                    {" "}
                    <Avatar
                      src={
                        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      }
                    />
                  </div>
                  <div className="flex-wrap ml-5">
                    {l.name}
                    <br /> <span className="font-light">{l.role}</span>
                  </div>
                </th>
                <td className="px-6 py-4 m-2 ">
                  <span
                    className={`${l.statusBg} rounded-xl p-1.5 dark:text-gray-900`}>
                    {l.status}
                  </span>
                </td>
                <td className="px-6 py-4">{l.in}</td>
                <td className="px-6 py-4">{l.out}</td>
                <td className="px-6 py-4 text-green-500 dark:text-green-300 font-bold">
                  {l.site}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LTAttendance;
