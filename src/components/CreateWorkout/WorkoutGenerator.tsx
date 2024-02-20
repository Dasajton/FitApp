import { useState } from "react";
import { Button } from "../../components";
import exerciseCollectionData from "../../data/exerciseCollectionData.json";

export const WorkoutGenerator = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDays, setWorkoutDays] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNameButtonClick = () => {
    setCurrentStep(2);
  };

  const handleDaysButtonClick = () => {
    setCurrentStep(3);
  };

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

  const handleNameInputEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleNameButtonClick();
    }
  };

  const handleDaysInputEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleDaysButtonClick();
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <div className="flex justify-center gap-2 mt-2">
          <input
            type="text"
            placeholder="Name of your Split?"
            value={workoutName}
            onChange={handleNameInputChange}
            onKeyDown={handleNameInputEnter}
          />
          <Button onClick={handleNameButtonClick}>Enter Name</Button>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex justify-center gap-2 mt-2">
          <input
            className="text-center"
            type="number"
            placeholder="Days per Week?"
            value={workoutDays}
            onChange={handleDaysInputChange}
            onKeyDown={handleDaysInputEnter}
          />
          <Button onClick={handleDaysButtonClick}>Enter Days</Button>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h2 className="text-2xl font-bold text-center ">{workoutName}</h2>
          <ul>
            {exerciseCollectionData.map((MuscleGroup) => (
              <li className="my-1" key={MuscleGroup.id}>
                <h3 className="text-xl font-medium">{MuscleGroup.name}</h3>
                <div className="flex gap-2">
                  <select className="w-2/4">
                    {MuscleGroup.exercises.map((exercise) => (
                      <option key={exercise.id} value={exercise.name}>
                        {exercise.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Sets"
                    className="w-1/4 text-center"
                  />
                  <Button additionalClasses="w-1/4">Add</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
