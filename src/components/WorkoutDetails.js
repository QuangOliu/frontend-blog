import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext);

  const handleDelete = async (id) => {
    const response = await fetch("/api/workout/" + id, {
      method: "DELETE",
    });
    console.log(response);
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <button
        onClick={() => {
          handleDelete(workout._id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default WorkoutDetails;
