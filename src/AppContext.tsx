import React, { createContext, useState } from "react";

interface IAppContext {
  workoutName: string;
  workoutDays: number;
  inputComplete: boolean;
  activeTab: number;
  setWorkoutName: (name: string) => void;
  setWorkoutDays: (days: number) => void;
  setInputComplete: (complete: boolean) => void;
  setActiveTab: (tab: number) => void;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDays, setWorkoutDays] = useState(3);
  const [inputComplete, setInputComplete] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <AppContext.Provider
      value={{
        workoutName,
        workoutDays,
        inputComplete,
        activeTab,
        setWorkoutName,
        setWorkoutDays,
        setInputComplete,
        setActiveTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
