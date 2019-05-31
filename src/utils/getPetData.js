const getAllPets = () => {
  return fetch(`https://neopets.herokuapp.com/api/`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Error with response ${response.status}`);
        return;
      }
      console.log(response);
      return response.json();
    })
    .catch(err => {
      throw new Error(err);
    });
};

export { getAllPets };
