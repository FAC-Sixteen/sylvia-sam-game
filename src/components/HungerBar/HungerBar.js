import React from "react";
import "./HungerBar.css";

const HungerBar = props => {
  return (
    <div className="bar">
      <div data-testid="hunger-bar" className="bar-level" style={{ width: props.hunger + "%" }} />
    </div>
  );
};

export default HungerBar;
