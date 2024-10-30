import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import workoutRoute from "./routes/workoutRoute.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

//connnect to mongodb
mongoose
  .connect(process.env.MONGO_API)
  .then(() => console.log("connect to mongodb"))
  .catch((err) => console.error(`Error to connecting mongodb ::: $${err}`));

// initialize routes
app.get("/", (req, res) => {
  res.json({ status: "true", message: " server is online" });
});

//working routes
app.use("/api", workoutRoute);

// server starts
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server online at http://localhost:${port}`);
});
