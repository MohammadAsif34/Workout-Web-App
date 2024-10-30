import React, { useCallback, useContext, useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { workoutContext } from "../context/WorkoutContext";
import { toast } from "react-toastify";

const Workouts = () => {
  // const [] = useState([]);
  const { workoutList, setWorkoutList, render } = useContext(workoutContext);
  // ./ada/

  const fetch = async () => {
    const api = "http://localhost:8800/api/workouts";

    try {
      const res = await window.fetch(api);
      if (!res.ok) {
        console.log(`error error while api fetch ::: ${data.status}`);
      }

      const resData = await res.json();
      setWorkoutList(resData.data);
      console.log(resData);
    } catch (err) {
      toast.error(`${err}`, { autoClose: 1500 });
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, [render]);

  return (
    <>
      <section>
        <div className=" my-5 flex flex-col-reverse gap-2">
          {workoutList.length >= 0 &&
            workoutList.map((item, index) => (
              <WorkoutCard
                key={index}
                id={item._id}
                title={item.title}
                load={item.load}
                reps={item.reps}
              />
            ))}
          {/* {workoutList.length >= 0 ?  : "failed to fetch"} */}
        </div>
      </section>
    </>
  );
};

export default Workouts;
