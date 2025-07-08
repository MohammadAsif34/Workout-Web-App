import mongoose from "mongoose";

const workoutSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    load: { type: Number, required: true },
    reps: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("workouts", workoutSchema);
