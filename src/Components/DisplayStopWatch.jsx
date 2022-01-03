import React, { useContext } from "react";
import StopWatchContext from "../ContextApi/StopWatchContext";
import { BtnStopWatch } from "./BtnStopWatch";
import "../App.css";

export const DisplayStopWatch = () => {
  const { time } = useContext(StopWatchContext);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "400px",
        margin: "auto",
        padding: "50px",
      }}
    >
      <span className="timeBox">{time.h >= 10 ? time.h : "0" + time.h}</span>
      <span className="timeBox">{time.m >= 10 ? time.m : "0" + time.m}</span>
      <span className="timeBox">{time.s >= 10 ? time.s : "0" + time.s}</span>
      <span className="timeBox">{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
      <div style={{ paddingTop: "40px" }}>
        <BtnStopWatch />
      </div>
    </div>
  );
};
