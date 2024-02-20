import { WorkoutInput } from "../../components";

export const CreateWorkout = () => {
  const handleInputContinue = (workoutName: string, workoutDays: number) => {
    console.log("Workout Name: ", workoutName);
    console.log("Workout Days: ", workoutDays);
  };

  return (
    <>
      <WorkoutInput onContinue={handleInputContinue} />
    </>
  );
};
