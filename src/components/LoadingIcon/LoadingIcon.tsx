import React from "react";
import "./index.css";
export const LoadingIcon = ({percentage = 0}) => {
  return (
    <div className="wrapper">
      <div className="percentage">{percentage} %</div>
      <div className="iconContainer">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <div className="percentage"></div>
        <div className="outerCircle">
          <div className="innerCircle"></div>
        </div>
      </div>
    </div>
  );
};
