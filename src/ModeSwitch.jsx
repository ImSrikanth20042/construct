import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "./Contexts/ThemeContext";

const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 mt-4 rounded-full w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white ">
      {theme === "dark" ? <LightMode /> : <DarkMode />}
    </button>
  );
};

export default ModeSwitch;
