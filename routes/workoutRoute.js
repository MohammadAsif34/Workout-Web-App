import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkouts,
} from "../controllers/workoutController.js";
const route = express.Router();

// get all workouts
route.get("/workouts", getWorkouts);
// create workouts
route.post("/create", createWorkout);
// delete workouts
route.delete("/delete/:id", deleteWorkout);

export default route;
