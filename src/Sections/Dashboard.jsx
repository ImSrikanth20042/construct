import { Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  dashboardCards,
  projectTimeline,
  recentActivities,
  upcomingTasks,
  resourceAllocations,
} from "../constants";
import {
  ResourceCard,
  TaskCard,
  MultiCards,
  ProjectTimeline,
  RecentActivities,
} from "../Cards";

const Dashboard = () => {
  return (
    <section className="max-container max-sm:mt-8 bg-gray-50 dark:bg-gray-900 h-full sm:h-fit p-10">
      <div className=" flex justify-between items-center px-2 py-0 rounded-lg shadow-sm bg-white m-0.5 dark:bg-gray-900">
        {/* Dashboard Title */}

        <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-5 dark:text-gray-200 ml-2">
          Dashboard
        </h1>

        {/* Search and Notifications */}
        <div className="flex p-1 mr-1 items-center space-x-4 mt-5 mb-5">
          {/* Search Input */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-md border dark:text-gray-200 dark:bg-gray-700 bg-gray-300 text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
            />
            <Search className="absolute right-3 top-2.5  dark:text-gray-200 text-gray-700" />
          </div>

          {/* Notification Icon */}
          <NotificationsNoneIcon className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
      </div>
      <MultiCards cards={dashboardCards} />

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 m-5 p-2">
        {/* Project Timeline Section */}

        <ProjectTimeline projectTimeline={projectTimeline} />

        {/* Recent Activities Section */}

        <RecentActivities recentActivities={recentActivities} />

        {/* Upcoming Tasks Section */}
        <div className="bg-white rounded-lg m-3 p-3 shadow-lg  w-full dark:bg-gray-800 ">
          <h3 className="font-medium text-2xl text-gray-900 dark:text-gray-200">
            Upcoming Tasks
          </h3>
          <div className="space-y-4 mt-4">
            {upcomingTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </div>

        {/* Resource Allocation Section */}
        <div className="bg-white rounded-lg shadow-lg p-3 m-3 w-full dark:bg-gray-800">
          <h3 className="font-medium text-2xl text-gray-900 dark:text-gray-200">
            Resource Allocation
          </h3>
          <div className="space-y-4 mt-4">
            {resourceAllocations.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
