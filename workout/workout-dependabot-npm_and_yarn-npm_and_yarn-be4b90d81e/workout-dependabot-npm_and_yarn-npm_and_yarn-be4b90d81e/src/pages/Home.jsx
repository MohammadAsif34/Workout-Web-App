import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Workouts from "../components/Workouts";
import WorkoutAdd from "../components/WorkoutAdd";
import { workoutContext } from "../context/WorkoutContext";

const Home = () => {
  const { theme } = useContext(workoutContext);
  return (
    <>
      <section
        style={{
          border: "1px solid black",
        }}
        className={` ${theme ? "" : "bg-[#0D0D0D] text-white"}`}
      >
        <Navbar />
        <div className=" container m-auto h-[91vh] px-5 flex overflow-auto ">
          <div className="flex-1  ">
            <Workouts />
          </div>
          <WorkoutAdd />
        </div>
      </section>
      ;
    </>
  );
};

export default Home;
