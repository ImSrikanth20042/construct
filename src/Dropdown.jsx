import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Dropdown = ({
  title,
  icon,
  children,
  isCollapsed,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div
      className={`flex flex-col cursor-pointer p-2 dark:text-gray-300 text-gray-900 hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 ${
        isCollapsed && "justify-center"
      }`}>
      {/* Header with toggle */}
      <div
        className="flex items-center justify-between"
        onClick={(e) => {
          e.stopPropagation(); // Prevent unwanted toggling
          toggleOpen();
        }}>
        <div className="flex items-center">
          {icon}
          {!isCollapsed && (
            <h2 className="font-semibold text-[18px]">{title}</h2>
          )}
        </div>
        {!isCollapsed && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </div>

      {/* Dropdown content - Ensuring clicks inside do not close the dropdown */}
      {!isCollapsed && isOpen && (
        <ul
          className="pl-6 mt-2 text-sm text-gray-700 dark:text-gray-200 space-y-1"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the dropdown
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
