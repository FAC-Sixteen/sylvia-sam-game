import React from "react";

const FoodOptions = props => {
  const handleClick = event => {
    const button = event.target;
    button.disabled = true;
    props.setHunger(oldHunger => oldHunger + parseInt(button.value));
    setTimeout(() => {
      button.disabled = false;
    }, 3000);
  };
  // const option = "food";
  return (
    <div className="option-container">
      <button onClick={handleClick} disabled={props.hunger <= 0} value="3">
        Food1
      </button>
      <button onClick={handleClick} disabled={props.hunger <= 0} value="2">
        Food2
      </button>
      <button onClick={handleClick} disabled={props.hunger <= 0} value="1">
        Food3
      </button>
    </div>
  );
};

export default FoodOptions;
