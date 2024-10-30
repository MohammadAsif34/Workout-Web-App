import { createContext, useState } from "react";

export const workoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [workoutList, setWorkoutList] = useState([]);
  const [render, setRender] = useState("abc");

  return (
    <workoutContext.Provider
      value={{
        theme,
        setTheme,
        workoutList,
        setWorkoutList,
        render,
        setRender,
      }}
    >
      {children}
    </workoutContext.Provider>
  );
};
