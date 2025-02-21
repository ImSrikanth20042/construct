import { Avatar } from "@mui/material";
import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
const LaborCards = ({ labor }) => {
  return (
    <>
      <div className=" m-2.5 p-3  max-w-full  rounded-lg flex justify-evenly">
        {labor.map((l, index) => (
          <div
            key={index}
            className="p-5 rounded-lg shadow-lg text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-600">
            <div className="flex flex-nowrap items-center justify-between mb-3 ">
              <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
              <div className="flex-wrap items-center justify-between ml-3">
                {l.name}
                <br /> <span>ID: {l.id}</span>
              </div>
              <div className="ml-auto">
                <EditOutlined sx={{ color: blue[400] }} />
                <DeleteOutlineOutlined sx={{ color: red[400] }} />
              </div>{" "}
            </div>
            <hr />{" "}
            <div className="grid grid-cols-2 justify-center gap-7 p-2">
              <div className="flex-wrap items-center justify-between m-2">
                Department
                <br /> <span className="font-bold">{l.department}</span>
              </div>
              <div className="flex-wrap items-center justify-between ml-auto m-2">
                Site
                <br /> <span className="font-bold">{l.site}</span>
              </div>
              <div className="flex-wrap items-center justify-between  m-2">
                Contact
                <br /> <span className="font-bold">{l.no}</span>
              </div>
              <div className="flex-wrap items-center justify-between ml-auto">
                Status
                <br />{" "}
                <span className={`p-1 rounded-full ${l.statusBg} mt-5`}>
                  {l.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-auto p-5 m-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            100
          </span>{" "}
          Entries
        </span>
        <nav className="ml-auto">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-l-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LaborCards;
