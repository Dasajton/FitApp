// Interface for Raw Exercises Data JSON

export interface IExerciseCollectionData {
  id: string;
  name: string;
  exercises: IExerciseData[];
}

export interface IExerciseData {
  id: string;
  name: string;
}

// Interface for Workout Plan Data

export interface IWorkoutSplit {
  id: string;
  name: string;
  createdAt: Date;
  days: number;
  workoutPerDay: IWorkoutPerDay[];
}

export interface IWorkoutPerDay {
  id: string;
  day: number;
  name: string;
  exercises: IExercisePerDay[];
}

export interface IExercisePerDay extends IExerciseData {
  sets: number;
}

// Interface for UserInput Data at Workout Creation

export interface IWorkoutInputProps {
  onContinue: (workoutName: string, workoutDays: number) => void;
}
