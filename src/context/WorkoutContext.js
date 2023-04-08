import { createContext, useReducer } from "react";

const RedecerWorkout = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [...state.workouts, action.payload] };
    case "DELETE_WORKOUT":
      return { workouts: state.workouts.filter((w) => w._id !== action.payload._id) };
    default:
      return state;
  }
};

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RedecerWorkout, { workouts: null });

  return <WorkoutContext.Provider value={{ ...state, dispatch }}>{children}</WorkoutContext.Provider>;
};
