import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

function Home() {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workout");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className='home'>
      <div className='workouts'>{workouts && workouts.map((workout) => <WorkoutDetails workout={workout} key={workout._id} />)}</div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
