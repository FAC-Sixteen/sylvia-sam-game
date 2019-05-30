import React from "react";
import "./App.css";

//  util functions
import decrease from "./utils/decrease";

// components
import Pet from "./components/Pet";
import FoodOptions from "./components/FoodOptions";

function App() {
  const [hunger, setHunger] = React.useState(100);

  const interval = () => {
    decrease(10, setHunger);
  };
  React.useEffect(() => {
    const intervalId = window.setInterval(interval, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <header />
      {hunger <= 0 ? <button onClick={() => setHunger(100)}>Start Again!</button> : null}
      <FoodOptions hunger={hunger} setHunger={setHunger} />
      <p>{hunger <= 0 ? "☠︎" : hunger}</p>
      <div>
        <Pet hunger={hunger}/>
      </div>
    </div>
  );
}

export default App;
