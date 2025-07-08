import workouts from "../models/workoutModel.js";

// get workouts
export const getWorkouts = async (req, res) => {
  try {
    const resData = await workouts.find();
    // await resData.json();

    if (!resData) {
      res.json({
        status: false,
        message: "failed to fetch workouts",
      });
    }

    res.json({
      status: true,
      message: "for get all workout from controllers",
      data: resData,
    });
  } catch (err) {
    res.json({
      status: true,
      message: `error rises while getting workouts ::: ${err}`,
    });
  }
};

// create workout
export const createWorkout = async (req, res) => {
  try {
    const data = req.body;
    const newWorkout = new workouts(data);
    await newWorkout.save();

    if (!newWorkout) {
      res.json({
        status: false,
        message: "workout failed to adding",
        data: newWorkout,
      });
    }

    res.json({
      status: true,
      message: "for get all workout from controllers",
      data: newWorkout,
    });
  } catch (err) {
    res.json({
      status: true,
      message: `${id}error rises while creating workout ::: ${err}`,
    });
  }
};

// delete workout
export const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const resData = await workouts.findByIdAndDelete(id);

    if (!resData) {
      res.json({ status: false, message: "Workout not found!" });
    }

    res.json({ status: true, message: `workout successfully deleted.${id} ` });
  } catch (err) {
    res.json({
      ststus: false,
      message: ` Error while deleting workout ::: ${err}`,
    });
  }
};
