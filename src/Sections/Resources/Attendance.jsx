import { useState } from "react";
import Dropdown from "../../Dropdown"; // Import your existing Dropdown component

const Attendance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <Dropdown
        title="Attendance"
        icon={``}
        isCollapsed={false}
        isOpen={isOpen}
        toggleOpen={() => setIsOpen((prev) => !prev)}>
        <li className="pl-4">
          <a
            href="/e-attendance"
            className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
            Employee
          </a>
        </li>
        <li className="pl-4">
          <a
            href="/l-attendance"
            className="block py-1 hover:bg-gray-300 dark:hover:bg-gray-600">
            Labor
          </a>
        </li>
      </Dropdown>
    </li>
  );
};

export default Attendance;
