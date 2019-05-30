import React from "react";

import {getPetData} from "../utils/getPetData";
import "./Pet.css";
import tombstone from '../assets/tombstone.png';

const Pet = props => {
  const name = props.name;
  const [data, setData] = React.useState(null);
console.log("name in pets:",name)
  React.useEffect(() => {
    getPetData(name).then(response => {
      setData(response[0]);
    });
  }, [name]);


  if (!data) return <div>NeoPet Loading...</div>;
  return (
    <div className="pet-container">
      {props.hunger <= 0 ?<img className="tomb-img" alt="you are dead" src={tombstone}/> :
      <img className="pet-img" src={data.image} alt={data.name} />};
    </div>
  );
};
export default Pet;
