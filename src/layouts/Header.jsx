import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="sticky top-0 z-50 shadow-md bg-lm-secondary dark:bg-dm-secondary">
      {/* HEADER CONTAINER: */}
      <div className="flex items-center justify-between px-6 py-6 mx-auto max-w-7xl">
        <h1 className="text-2xl font-extrabold dark:text-white">
          Where in the world?
        </h1>
        <div>
          <i
            className={`fa fa-${
              theme === "dark" ? "sun" : "moon"
            } dark:text-white`}
            id="theme-icon"
          ></i>
          <span
            className="ml-2 cursor-pointer text-lm-text dark:text-dm-text "
            id="theme-toggle"
            onClick={handleTheme}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
