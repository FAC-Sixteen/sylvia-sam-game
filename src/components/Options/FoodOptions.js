import React from "react";
import "./FoodOptions.css";

import omelette from "../../assets/foods/Carrot_and_pea_omelette.gif";
import thornberry from "../../assets/foods/thornberry.gif";
import cake from "../../assets/foods/Choc-faeriecake.gif";
import negg from "../../assets/foods/Negg.gif";
import jelly from "../../assets/foods/jelly.gif";
import rotten from "../../assets/foods/Om_cheese1.gif";
import pruneJuice from "../../assets/foods/Prune-juice.gif";
import tcheaFruit from "../../assets/foods/Tchea_Fruit.gif";

const FoodOptions = props => {
  const foods = [
    { description: "omelette", name: omelette, value: "30" },
    { description: "thornberry", name: thornberry, value: "10" },
    { description: "cake", name: cake, value: "50" },
    { description: "negg", name: negg, value: "20" },
    { description: "jelly", name: jelly, value: "15" },
    { description: "rotten", name: rotten, value: "-5" },
    { description: "pruneJuice", name: pruneJuice, value: "5" },
    { description: "tcheaFruit", name: tcheaFruit, value: "30" }
  ];

  const [foodId1, setFoodId1] = React.useState(0);
  const [foodId2, setFoodId2] = React.useState(1);
  const [foodId3, setFoodId3] = React.useState(2);

  const randomGenerator = func => {
    const max = foods.length;
    func(Math.floor(Math.random() * max));
  };

  const handleClick = event => {
    const button = event.target;
    button.disabled = true;
    console.log(button);
    props.setHunger(oldHunger => {
      if (oldHunger + parseInt(button.value) > 100) return 100;
      return oldHunger + parseInt(button.value);
    });
    switch (button.id) {
      case "food1":
        randomGenerator(setFoodId1);
        break;
      case "food2":
        randomGenerator(setFoodId2);
        break;
      case "food3":
        randomGenerator(setFoodId3);
        break;
      default:
        break;
    }
    setTimeout(() => {
      button.disabled = false;
    }, 3000);
  };

  // const option = "food";
  return (
    <div className="option-container">
      <div className="food-container">
        <div className="food-background">
          <img src={foods[foodId1].name} alt={foods[foodId1].description} />
          <p data-testid="food-button">
            {foods[foodId1].description}: {foods[foodId1].value}pts
          </p>
        </div>
        <button
          id="food1"
          onClick={handleClick}
          disabled={props.hunger <= 0}
          value={foods[foodId1].value}
        />
      </div>
      <div className="food-container">
        <div className="food-background">
          <img src={foods[foodId2].name} alt={foods[foodId2].description} />
          <p>
            {foods[foodId2].description}: {foods[foodId2].value}pts
          </p>
        </div>
        <button
          id="food2"
          onClick={handleClick}
          disabled={props.hunger <= 0}
          value={foods[foodId2].value}
        />
      </div>
      <div className="food-container">
        <div className="food-background">
          <img src={foods[foodId3].name} alt={foods[foodId3].description} />
          <p>
            {foods[foodId3].description}: {foods[foodId3].value}pts
          </p>
        </div>
        <button
          id="food3"
          onClick={handleClick}
          disabled={props.hunger <= 0}
          value={foods[foodId3].value}
        />
      </div>
    </div>
  );
};

export default FoodOptions;
