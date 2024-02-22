import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "../../../assets/css/WorkoutGenerator.scss";

export const WorkoutDay = ({ numDays }: { numDays: number }) => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="workout-generator">
      <div className="tabs">
        {[...Array(numDays)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index + 1)}
            className={`tab ${activeTab === index + 1 ? "active-tab" : ""}`}
          >
            Day {index + 1}
          </div>
        ))}
      </div>
      <div className="contents">
        {[...Array(numDays)].map((_, index) => (
          <div
            key={index}
            className={`content ${
              activeTab === index + 1 ? "active-content" : ""
            }`}
          >
            <h2>Content {index + 1}</h2>
            <p>This is Content {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
