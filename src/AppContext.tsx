import React, { createContext, useState } from "react";

interface IAppContext {
  workoutName: string;
  workoutDays: number;
  setWorkoutName: (name: string) => void;
  setWorkoutDays: (days: number) => void;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDays, setWorkoutDays] = useState(0);

  return (
    <AppContext.Provider
      value={{ workoutName, workoutDays, setWorkoutName, setWorkoutDays }}
    >
      {children}
    </AppContext.Provider>
  );
};
