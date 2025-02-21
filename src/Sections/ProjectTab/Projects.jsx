import { Add } from "@mui/icons-material";
import { useState } from "react";
import {
  projectData,
  projectMulti,
  pTimeline,
  recentTasks,
} from "../../constants";
import { PT, RT, ProjectMulti } from "../../Cards";
import { ProjectTable } from "../../Tables";
import { AddProject } from "../../Modals";
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="max-container max-sm:mt-8 bg-white fit-content dark:bg-gray-900 h-full p-10">
      <div className=" flex justify-between items-center px-0 py-0 bg-white mt-0 dark:bg-gray-900">
        <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-5 ml-1.5 dark:text-gray-200">
          {/*Project Heading */}
          Project Dashboard
        </h1>

        {/*Add project button */}
        <div className="flex items-center space-x-4 p-2.5 bg-blue-500 rounded-sm mr-4 cursor-pointer">
          <div
            className="relative flex justify-evenly"
            onClick={() => setIsModalOpen(true)}>
            <Add sx={{ color: "white" }} />
            <h3 className="font-medium text-base text-white">New Project</h3>
          </div>
        </div>
      </div>
      <ProjectMulti cards={projectMulti} />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 m-5 p-2">
        <PT pTimeline={pTimeline} />
        <RT recentTasks={recentTasks} />
      </div>{" "}
      <div className="shadow-sm dark:shadow-gray-300 rounded-lg text-center p-1 m-1 mb-0">
        <h3 className="text-gray-900 dark:text-gray-300 text-lg p-1 m-1">
          Active Projects
        </h3>
        <ProjectTable data={projectData} />
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
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isModalOpen && <AddProject setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};

export default Projects;
