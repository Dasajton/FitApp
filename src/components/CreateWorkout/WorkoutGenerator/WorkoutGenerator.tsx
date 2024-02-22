import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { WorkoutDay } from "./WorkoutDay";

export const WorkoutGenerator = () => {
  const { workoutDays, workoutName } = useContext(AppContext);

  return (
    <>
      <h2 className="text-2xl text-center font-bold text-blue-500">
        {workoutName}
      </h2>
      <div className="box">
        <WorkoutDay numDays={workoutDays} />
      </div>
    </>
  );
};
