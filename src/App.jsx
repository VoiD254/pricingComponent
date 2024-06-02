import "./App.css";
import { useEffect, useState } from "react";
import { BgSvg, CirclesSvg } from "./components/Svg";
import { Card } from "./components/Card";

function App() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() =>{
	if(theme === "dark"){
		document.documentElement.classList.add("dark");
	}else{
		document.documentElement.classList.remove("dark");
	}
  }, [theme]);

  const toggleTheme = () => {
	setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-background h-full dark:bg-gray-900">
      <button className="absolute ml-8 mt-6 p-3 rounded-3xl z-10 bg-slate-50 dark:bg-white dark:text-black" onClick={toggleTheme}>
		{theme + " mode"}
	</button>
      <div className="flex justify-center dark:invisible">
        <BgSvg />
      </div>
      <div className="flex justify-center items-center relative h-full">
        <div className="flex absolute bottom-56 align-middle">
          <CirclesSvg />
        </div>
        <div className="absolute bottom-64 flex flex-col items-center">
          <h2 className="font-extrabold text-2xl text-slate-700 lg:text-3xl dark:text-white">
            Simple, traffic-based pricing
          </h2>
          <p className="text-sm text-gray-500 font-medium lg:text-lg dark:text-gray-300">
            Sign-up for our 30-day trial.
          </p>
          <p className="text-sm text-gray-500 font-medium mt-1 lg:text-lg dark:text-gray-300">
            No Credit Card Required.
          </p>
        </div>
        <div className="flex absolute">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
