import React from "react";

import "./Pet.css";
import tombstone from "../../assets/tombstone.png";

const Pet = props => {
  if (!props.petData) return <div>NeoPet Loading...</div>;

  const { name, image } = props.petData;

  return (
    <div className="pet-container">
      {props.hunger <= 0 ? (
        <img className="tomb-img" alt="you are dead" src={tombstone} />
      ) : (
        <img className="pet-img" src={image} alt={name} />
      )}
      ;
    </div>
  );
};
export default Pet;
