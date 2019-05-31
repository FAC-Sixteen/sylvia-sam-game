import { getAllPets } from "./getPetData";

const randomPet = () => {
  return getAllPets()
    .then(response => {
      const allNames = response.map(pet => pet.name);
      const max = allNames.length;
      const random = Math.floor(Math.random() * max);
      console.log(allNames[random]);
      return new Promise((resolve, reject) => {
        resolve(allNames[random]);
        reject("sorry, nope");
      });
    })
    .catch(err => console.log(err));
};

export default randomPet;
