import React, { useContext } from "react";
import { workoutContext } from "../context/WorkoutContext.jsx";
const Navbar = () => {
  const { theme, setTheme } = useContext(workoutContext);
  const handleDarkmode = () => {
    setTheme(!theme);
  };
  return (
    <>
      <section className={`${theme ? "bg-teal-500" : "bg-black"}`}>
        <div
          className={`container m-auto px-5 
              text-white`}
        >
          <div className="w-full h-20 flex items-center">
            <div className=" flex-1">
              <h1 className="text-2xl font-bold font-mono">WORKOUT BUDDY</h1>
            </div>
            <div className=" flex justify-end">
              <span
                className="px-2 text-3xl cursor-pointer"
                onClick={handleDarkmode}
              >
                <i className="bi bi-cloud-sun-fill "></i>
              </span>
            </div>
            {/* this is navbar */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
