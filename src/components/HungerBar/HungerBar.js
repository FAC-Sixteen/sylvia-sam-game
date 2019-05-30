import React from "react";
import "./HungerBar.css";

const HungerBar = props => {
  return (
    <div className="bar">
      <div className="bar-level" style={{ width: props.hunger + "%" }} />
    </div>
  );
};

export default HungerBar;
