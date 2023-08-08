// import React from 'react'
import { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

interface theme {
  mode: boolean;
}

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(getDarkMode());

  function getDarkMode(): boolean {
    const storage = localStorage.getItem("darkMode");
    console.log(storage);

    if (storage == null || "") {
      return false;
    } else {
      const data: theme = JSON.parse(storage);

      return data.mode;
    }
  }

  useEffect(() => {
    getDarkMode();
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem("darkMode");
    if (storage !== null) {
      const data = JSON.parse(storage);
      setDarkMode(data.mode);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (darkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [darkMode]);

  useEffect(() => {
    const data = { mode: darkMode };
    localStorage.setItem("darkMode", JSON.stringify(data));
  }, [darkMode]);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-10 h-20 bg-white dark:bg-dk-dark-blue flex justify-between items-center p-4 lg:px-16 lg:py-4 shadow-md shadow-slate-400 dark:text-mt-white dark:shadow-lt-very-dark-blue ">
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div onClick={toggleDarkMode} className="flex gap-2 hover:cursor-pointer">
        {darkMode ? <BsSun size={20} /> : <MdOutlineDarkMode size={20} />}
        <span>{darkMode ? "Light" : "Dark"} Mode</span>
      </div>
    </header>
  );
};

export default Header;
