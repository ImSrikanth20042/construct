import { useState, useMemo } from "react";
import ModeSwitch from "./ModeSwitch";
import { Avatar } from "@mui/material";
import {
  PrecisionManufacturing,
  Settings,
  PeopleAltOutlined,
  Apartment,
  Menu,
  Inventory,
  SpaceDashboardOutlined,
  ReceiptLong,
  GppGoodOutlined,
  TrendingUpOutlined,
  Groups3Sharp,
} from "@mui/icons-material";
import Dropdown from "./Dropdown";
import { useTheme } from "./Contexts/ThemeContext";
import { useSidebar } from "./Contexts/SidebarContext";
import { Attendance } from "./Sections/Resources";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { openDropdown, toggleDropdown } = useSidebar();
  const { theme } = useTheme();
  const logoURL = useMemo(() => {
    return theme === "dark"
      ? "/assets/Briqko/logo-white.png"
      : "/assets/Briqko/logo-Black.png";
  }, [theme]);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 min-h-screen   ${
          isCollapsed ? "w-16" : "w-64"
        } bg-gray-100 dark:bg-gray-900 border-r shadow-sm flex flex-col overflow-y-auto`}
        style={{ maxHeight: "100vh" }} // Ensure full height scrolling
      >
        {/* Header */}
        <div className="p-5 flex items-center justify-between">
          {!isCollapsed && (
            <img
              src={logoURL}
              alt="Construction ERP"
              className="h-15 p-0 m-1"
            />
          )}
          <Menu
            onClick={toggleSidebar}
            className="cursor-pointer text-gray-900 dark:text-gray-300"
          />
        </div>
        <hr />

        {/* Menu Items */}
        <div className="flex-1 p-4 flex flex-col gap-4">
          <a
            href="/dashboard"
            className={`flex items-center p-2 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer  ${
              isCollapsed && "justify-center"
            }`}>
            <SpaceDashboardOutlined className="mr-2 text-gray-900 dark:text-gray-300" />
            {!isCollapsed && (
              <h2 className="font-semibold text-[18px] dark:text-gray-300 text-gray-900">
                Dashboard
              </h2>
            )}
          </a>
          {/* Projects Menu with Dropdown */}
          <Dropdown
            title="Projects"
            icon={
              <Apartment className="mr-2 text-gray-900 dark:text-gray-300" />
            }
            isCollapsed={isCollapsed}
            isOpen={openDropdown === "projects"}
            toggleOpen={() => toggleDropdown("projects")}>
            <li>
              <a
                href="/projects"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/p-overview"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Overview
              </a>
            </li>
            <li>
              <a
                href="/p-schedules"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Schedule
              </a>
            </li>
            <li>
              <a
                href="/p-resources"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Resource Management
              </a>
            </li>
            <li>
              <a
                href="/p-costs"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Cost Management
              </a>
            </li>
            <li>
              <a
                href="/p-risks"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Risks Management
              </a>
            </li>
            <li>
              <a
                href="/p-reports"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Reports
              </a>
            </li>
            <li>
              <a
                href="/p-docs"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Documents
              </a>
            </li>
          </Dropdown>

          <Dropdown
            title="Resources"
            icon={
              <PeopleAltOutlined className="mr-2 text-gray-900 dark:text-gray-300" />
            }
            isCollapsed={isCollapsed}
            isOpen={openDropdown === "resources"}
            toggleOpen={() => toggleDropdown("resources")}>
            <li>
              <a
                href="/resources"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Employees
              </a>
            </li>
            <li>
              <a
                href="/r-labor"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Labor
              </a>
            </li>

            <Attendance />

            <li>
              <a
                href="/r-payroll"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Payroll
              </a>
            </li>
          </Dropdown>
          <Dropdown
            title="Bills"
            icon={
              <ReceiptLong className="mr-2 text-gray-900 dark:text-gray-300" />
            }
            isCollapsed={isCollapsed}
            isOpen={openDropdown === "bills"}
            toggleOpen={() => toggleDropdown("bills")}>
            <li>
              <a
                href="/billing"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/new-bill"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                New Bill
              </a>
            </li>
            <li>
              <a
                href="/b-history"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                History
              </a>
            </li>
            <li>
              <a
                href="/bill-ra"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Reports
              </a>
            </li>
          </Dropdown>
          <Dropdown
            title="Collaborators"
            icon={
              <Groups3Sharp className="mr-2 text-gray-900 dark:text-gray-300" />
            }
            isCollapsed={isCollapsed}
            isOpen={openDropdown === "collaborators"}
            toggleOpen={() => toggleDropdown("collaborators")}>
            <li>
              <a
                href="/c-contractor"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Contractor
              </a>
            </li>
            <li>
              <a
                href="/c-supplier"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Supplier
              </a>
            </li>
            <li>
              <a
                href="/c-client"
                className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
                Client
              </a>
            </li>
          </Dropdown>
          <a
            href="/inventory"
            className={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700  hover:bg-gray-200  cursor-pointer  ${
              isCollapsed && "justify-center"
            }`}>
            <Inventory className="mr-2 text-gray-900 dark:text-gray-300" />
            {!isCollapsed && (
              <h2 className="font-semibold text-[18px] dark:text-gray-300 text-gray-900">
                Inventory
              </h2>
            )}
          </a>
          <a
            href="/machinery-management"
            className={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700  hover:bg-gray-200  cursor-pointer  ${
              isCollapsed && "justify-center"
            }`}>
            <PrecisionManufacturing className="mr-2 text-gray-900 dark:text-gray-300" />
            {!isCollapsed && (
              <h2 className="font-semibold text-[18px] text-gray-900 dark:text-gray-300">
                Machinery
              </h2>
            )}
          </a>
          <a
            href="/c-noc"
            className={`flex items-center p-1 rounded-lg dark:hover:bg-gray-700  hover:bg-gray-200  cursor-pointer  ${
              isCollapsed && "justify-center"
            }`}>
            <GppGoodOutlined className="mr-2 text-gray-900 dark:text-gray-300" />
            {!isCollapsed && (
              <h2 className="font-semibold text-[18px] text-gray-900 dark:text-gray-300">
                Compliance & NOC
              </h2>
            )}
          </a>
          <a
            href="/r-analytics"
            className={`flex items-center p-1 rounded-lg dark:hover:bg-gray-700  hover:bg-gray-200 cursor-pointer  ${
              isCollapsed && "justify-center"
            }`}>
            <TrendingUpOutlined className="mr-2 text-gray-900 dark:text-gray-300" />
            {!isCollapsed && (
              <h2 className="font-semibold text-[18px] text-gray-900 dark:text-gray-300">
                Reports & Analytics
              </h2>
            )}
          </a>
        </div>

        <ModeSwitch />

        <a
          href="/settings"
          className={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700  hover:bg-gray-200  cursor-pointer  ${
            isCollapsed && "justify-center"
          }`}>
          <Settings className="m-0.5 text-gray-900 dark:text-gray-300" />
          {!isCollapsed && (
            <h2 className="font-semibold text-[18px] text-gray-900 dark:text-gray-300">
              Settings
            </h2>
          )}
        </a>

        <hr />

        {/* User Info */}

        <div
          className={`p-4 flex items-center dark:hover:bg-gray-700  hover:bg-gray-200  ${
            isCollapsed && "justify-center"
          }`}>
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
          />
          {!isCollapsed && (
            <div className="ml-4">
              <h4 className="text-gray-900 font-medium dark:text-gray-300">
                Admin User
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                admin@erp.com
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1  p-0 ${isCollapsed ? "ml-16" : "ml-64"} `}></div>
    </div>
  );
};

export default SideBar;
