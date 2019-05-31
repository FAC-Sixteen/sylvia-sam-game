import React from "react";
import "./App.css";

//  util functions
import randomPet from "./utils/randomPet";
import { getAllPets } from "./utils/getPetData";

// components
import Pet from "./components/Pet/Pet";
import FoodOptions from "./components/Options/FoodOptions";
import HungerBar from "./components/HungerBar/HungerBar";

//assets 
import neopets from './assets/Neopets_logo.gif';
import tamagotchi from './assets/Tamagotchi_logo.gif';

function App() {
  const [hunger, setHunger] = React.useState(100);
  const [petData, setPetData] = React.useState(null);

  const interval = () => {
    setHunger(oldValue => (oldValue <= 0 ? 0 : oldValue - 1));
  };
  React.useEffect(() => {
    const intervalId = window.setInterval(interval, 300);
    return () => window.clearInterval(intervalId);
  }, []);

  const newPet = () => {
    getAllPets()
      .then(response => randomPet(response))
      .then(name => {
        setPetData(name);
        setHunger(100);
      });
  };

  React.useEffect(() => {
    newPet();
  }, []);

  return (
    <div className={hunger <= 0 ? "container graveyard" : "container"}>
      <header>
        <div className="logos">
          <img src={neopets} alt="neopets logo"/>
          <p>x</p>
          <img src={tamagotchi} alt="tamagotchi logo"/>
        </div>
        <h1 className="title" aria-label="Neopets x Tamagotchi">Neopets x Tamagotchi</h1> 
        
        <p className="description">Where Neopets meets Tamagotchi! </p>
        <p className="instructions">Feed your Neopets to keep them from getting too hungry by clicking on the foods! </p>
      </header>
      <FoodOptions hunger={hunger} setHunger={setHunger} />
      {petData ? <p className="pet-name">{petData.name}</p> : null}
      <HungerBar hunger={hunger} />
      <p>{hunger <= 0 ? "☠︎" : hunger}</p>
      {hunger <= 0 ? (
        <button className="start-again" onClick={newPet}>
          Start Again!
        </button>
      ) : null}

      <div>
        <Pet petData={petData} hunger={hunger} />
      </div>
    </div>
  );
}

export default App;
