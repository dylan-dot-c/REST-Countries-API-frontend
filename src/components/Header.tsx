// import React from 'react'
import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-10 h-20 bg-white dark:bg-dk-dark-blue flex justify-between items-center p-4 lg:px-16 lg:py-4 shadow-md shadow-slate-400 dark:text-mt-white dark:shadow-lt-very-dark-blue ">
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="flex gap-2 hover:cursor-pointer"
      >
        {darkMode ? <MdDarkMode size={20} /> : <MdOutlineDarkMode size={20} />}
        <span>{darkMode ? "Light" : "Dark"} Mode</span>
      </div>
    </header>
  );
};

export default Header;
