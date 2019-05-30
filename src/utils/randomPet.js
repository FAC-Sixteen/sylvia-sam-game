import {getAllPets} from './getPetData';

const randomPet = (func) => {
    return getAllPets().then(response => {
        const allNames = response.map(pet => pet.name);
        const max = allNames.length;
        const random = Math.floor(Math.random() * max);
        console.log(allNames[random]);
        func(allNames[random])

    })
    .catch(err => console.log(err))
};

export default randomPet;