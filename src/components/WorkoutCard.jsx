import React, { useContext } from "react";
import { workoutContext } from "../context/WorkoutContext";
import { toast } from "react-toastify";

const WorkoutCard = ({ id, title = "null", load = 0, reps = 0 }) => {
  const { theme, setRender } = useContext(workoutContext);

  const handleDelete = async (id) => {
    const api = `http://localhost:8800/api/delete/${id}`;

    try {
      const res = await fetch(api, { method: "DELETE" });
      console.log(`wkrwkrwk:${api}${id}`);

      if (!res.ok) {
        console.log(`error while workout deleting ::: ${res.status}`);
      }

      setRender(id);
      toast.success("workout successfully deleted", { autoClose: 1500 });
    } catch (err) {
      console.log(`error while workout adding ::: ${err}`);
    }
  };

  return (
    <div
      className={`px-5 py-3 ${theme ? "bg-gray-200" : "bg-black"} rounded-xl`}
    >
      <span
        className="float-end cursor-pointer hover:text-teal-500"
        onClick={() => handleDelete(id)}
      >
        <i className="bi bi-trash text-xl"></i>
      </span>
      <h1 className="text-2xl text-teal-500 font-semibold ">{title}</h1>
      <div className=" flex">
        <p className="w-28">
          <strong>Load:</strong>&nbsp;
          {load}
        </p>
        <p className="w-28 ">
          <strong>Reps:</strong>&nbsp;
          {reps}
        </p>
      </div>
      <span className="text-sm">time</span>
    </div>
  );
};

export default WorkoutCard;
