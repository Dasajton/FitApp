import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { IWorkoutInputProps } from "../../interfaces";
import { Button } from "..";

export const WorkoutInput: React.FC<IWorkoutInputProps> = ({ onContinue }) => {
  const { workoutName, workoutDays, setWorkoutName, setWorkoutDays } =
    useContext(AppContext);

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkoutName(event.target.value);
  };

  const handleDaysInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkoutDays(Number(event.target.value));
  };

  const handleContinueButtonClick = () => {
    if (!workoutName.trim() || workoutDays < 1) {
      alert("Please fill in the workout name and choose at least 1 day.");
      return;
    }
    alert("Workout Name and Days per Week are set! Continue to the next step.");
    onContinue(workoutName, workoutDays);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-1">Workout Name:</h3>
        <input
          className="w-[15rem]"
          placeholder="Enter Workout Name..."
          type="text"
          value={workoutName}
          onChange={handleNameInputChange}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-1">Days per Week:</h3>
        <input
          className="w-[15rem]"
          type="number"
          value={workoutDays}
          onChange={handleDaysInputChange}
        />
      </div>
      <Button onClick={handleContinueButtonClick}>Continue</Button>
    </div>
  );
};
