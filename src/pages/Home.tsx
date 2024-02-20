import { WorkoutInput } from "../components";

export const Home = () => {
  const handleContinue = (workoutName: string, workoutDays: number) => {
    console.log("Workout Name: ", workoutName);
    console.log("Workout Days: ", workoutDays);
  };

  return (
    <>
      <WorkoutInput onContinue={handleContinue} />
    </>
  );
};
