import { Outlet, Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="flex justify-between items-start dark:bg-gray-600 w-full h-screen  p-10">
      {/* Sidebar Navigation */}
      <nav className="block max-w-sm p-6 bg-white border h-full border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link
              to="general"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current="page">
              {" "}
              General Settings
            </Link>
          </li>
          <li>
            <Link
              to="company-profile"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Company Profile
            </Link>
          </li>
          <li>
            <Link
              to="user-management"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              User Management
            </Link>
          </li>
          <li>
            <Link
              to="roles-permissions"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Roles & Permissions
            </Link>
          </li>

          <li>
            <Link
              to="mail-settings"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Email Settings
            </Link>
          </li>
          <li>
            <Link
              to="notifications"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Notifications
            </Link>
          </li>
          <li>
            <Link
              to="backup"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Backup & Recovery
            </Link>
          </li>

          <li>
            <Link
              to="logs"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              System Logs
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
