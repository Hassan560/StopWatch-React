import React, { useContext } from "react";
import StopWatchContext from "../ContextApi/StopWatchContext";
import "../App.css";

export const BtnStopWatch = () => {
  const { start, status, stop, reset, resume } = useContext(StopWatchContext);
  return (
    <div>
      {status === 0 ? (
        <div>
          <button className="btn" onClick={start}>
            Start
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <button className="btn2" onClick={stop}>
            {" "}
            Stop
          </button>
          <button className="btn3" onClick={reset}>
            {" "}
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button className="btn4" onClick={resume}>
            {" "}
            Resume
          </button>
          <button className="btn3" onClick={reset}>
            {" "}
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
