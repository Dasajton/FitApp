import React, { createContext, useState } from "react";

interface IAppContext {
  workoutName: string;
  workoutDays: number;
  inputComplete: boolean;
  setWorkoutName: (name: string) => void;
  setWorkoutDays: (days: number) => void;
  setInputComplete: (complete: boolean) => void;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDays, setWorkoutDays] = useState(0);
  const [inputComplete, setInputComplete] = useState(false);

  return (
    <AppContext.Provider
      value={{
        workoutName,
        workoutDays,
        inputComplete,
        setWorkoutName,
        setWorkoutDays,
        setInputComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
