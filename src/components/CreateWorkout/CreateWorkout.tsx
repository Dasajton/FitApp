import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { WorkoutInput, WorkoutGenerator } from "../../components";

export const CreateWorkout = () => {
  const { inputComplete, setInputComplete } = useContext(AppContext);

  const handleInputContinue = (workoutName: string, workoutDays: number) => {
    console.log("Workout Name: ", workoutName);
    console.log("Workout Days: ", workoutDays);
    setInputComplete(true);
  };

  return (
    <>
      {!inputComplete ? (
        <WorkoutInput onContinue={handleInputContinue} />
      ) : (
        <WorkoutGenerator />
      )}
    </>
  );
};
