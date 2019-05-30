import React from "react";
import "./App.css";

//  util functions
import decrease from "./utils/decrease";
import randomPet from "./utils/randomPet";

// components
import Pet from "./components/Pet";
import FoodOptions from "./components/FoodOptions";

function App() {
  const [hunger, setHunger] = React.useState(100);
  const [petName, setPetName] = React.useState(null);


  const interval = () => {
    decrease(10, setHunger);
  };
  React.useEffect(() => {
    const intervalId = window.setInterval(interval, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const newPet = () => {
    randomPet(setPetName);
    setHunger(100);
  };
  React.useEffect(() => {
    newPet();
  },[])
  

  return (
    <div className={hunger <= 0 ? "container graveyard" : "container"}>
      <header />
      {hunger <= 0 ? <button onClick={newPet}>Start Again!</button> : null}
      <FoodOptions hunger={hunger} setHunger={setHunger} />
      <p>{hunger <= 0 ? "☠︎" : hunger}</p>
      <div>
        <Pet name={petName} hunger={hunger}/>
      </div>
    </div>
    
  )
}

export default App;
