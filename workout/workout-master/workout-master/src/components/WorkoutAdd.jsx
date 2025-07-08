import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { workoutContext } from "../context/WorkoutContext";
import { toast, ToastContainer } from "react-toastify";
import QRious from "qrious";
import "react-toastify/ReactToastify.css";
const WorkoutAdd = () => {
  const { theme, setRender } = useContext(workoutContext);
  const canvasRef = useRef(null);

  const { register, handleSubmit, reset } = useForm();
  const formSubmit = async (data) => {
    const api = "https://workout-p1vk.onrender.com/api/create";
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      setRender(resData.data._id);
      if (!resData) {
        console.log(`error to data posting`);
      }

      toast.success("New Workout added", { autoClose: 1000 });
      console.log(` data create successfuly`);
    } catch (err) {
      //

      toast.error(`${err}`, { autoClose: 1000 });
      console.error(`error while workout adding ::: ${err}`);
    }

    reset();
  };

  useEffect(() => {
    const qr = new QRious({
      element: canvasRef.current,
      value: "wel-come to our websiter",
      size: 75,
    });
  }, []);

  return (
    <>
      <section>
        <div className=" w-[500px] my-5 px-10 ">
          <h1 className="my-4 text-2xl font-semibold">Add Your Workout</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label>workout name</label>
            <input
              type="text"
              {...register("title")}
              className={`w-full h-10 px-4 border ${
                theme ? "bg-gray-200 border-teal-500" : "bg-[#191919]"
              } rounded-lg `}
              placeholder="enter workout name "
              required
            />
            <label>Load (in kg)</label>
            <input
              type="text"
              {...register("load")}
              className={`w-full h-10 px-4 border ${
                theme ? "bg-gray-200 border-teal-500" : "bg-[#191919]"
              } rounded-lg `}
              placeholder="enter load in kg"
              required
            />
            <label>Reps</label>
            <input
              type="text"
              {...register("reps")}
              className={`w-full h-10 px-4 border ${
                theme ? "bg-gray-200 border-teal-500" : "bg-[#191919]"
              } rounded-lg `}
              placeholder="enter reatation"
              required
            />
            <button
              type="submit"
              className={` h-10 px-4 my-4 border ${
                theme ? "border-teal-500" : "bg-black"
              } rounded-lg  `}
            >
              Add
            </button>
          </form>
          <ToastContainer
            toastStyle={{ backgroundColor: `${theme ? "" : "#191919"}` }}
          />
        </div>
        <div className="float-end">
          <canvas ref={canvasRef}></canvas>
        </div>
      </section>
    </>
  );
};

export default WorkoutAdd;
