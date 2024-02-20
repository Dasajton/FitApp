import { useState } from "react";
import "../../assets/css/WorkoutGenerator.scss";

export const WorkoutGenerator = () => {
  const [state, setState] = useState(1);

  const action = (index: number) => {
    setState(index);
  };
  return (
    <>
      <div className="box">
        <div className="tabs">
          <div
            onClick={() => action(1)}
            className={`${state === 1 ? "tab active-tab" : "tab"}`}
          >
            Tab 1
          </div>
          <div
            onClick={() => action(2)}
            className={`${state === 2 ? "tab active-tab" : "tab"}`}
          >
            Tab 2
          </div>
          <div
            onClick={() => action(3)}
            className={`${state === 3 ? "tab active-tab" : "tab"}`}
          >
            Tab 3
          </div>
        </div>

        <div className="contents">
          <div
            className={`${state === 1 ? "content active-content" : "content"}`}
          >
            <h2>Content 1</h2>
            <p>This is Content 1</p>
          </div>

          <div
            className={`${state === 2 ? "content active-content" : "content"}`}
          >
            <h2>Content 2</h2>
            <p>This is Content 2</p>
          </div>

          <div
            className={`${state === 3 ? "content active-content" : "content"}`}
          >
            <h2>Content 3</h2>
            <p>This is Content 3</p>
          </div>
        </div>
      </div>
    </>
  );
};
