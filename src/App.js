import React from "react";
import "./App.css";

//  util functions
import decrease from "./utils/decrease";
import randomPet from "./utils/randomPet";

// components
import Pet from "./components/Pet/Pet";
import FoodOptions from "./components/Options/FoodOptions";
import HungerBar from "./components/HungerBar/HungerBar";

function App() {
  const [hunger, setHunger] = React.useState(100);
  const [petName, setPetName] = React.useState(null);

  const interval = () => {
    decrease(1, setHunger);
  };
  React.useEffect(() => {
    const intervalId = window.setInterval(interval, 300);
    return () => window.clearInterval(intervalId);
  }, []);

  const newPet = () => {
    randomPet(setPetName);
    setHunger(100);
  };
  React.useEffect(() => {
    newPet();
  }, []);

  return (
    <div className={hunger <= 0 ? "container graveyard" : "container"}>
      <header />
      <FoodOptions hunger={hunger} setHunger={setHunger} />
      <HungerBar hunger={hunger} />
      <p>{hunger <= 0 ? "☠︎" : hunger}</p>
      {hunger <= 0 ? (
        <button className="start-again" onClick={newPet}>
          Start Again!
        </button>
      ) : null}

      <div>
        <Pet name={petName} hunger={hunger} />
      </div>
    </div>
  );
}

export default App;
