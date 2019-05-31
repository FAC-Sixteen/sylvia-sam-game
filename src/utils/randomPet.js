const randomPet = data => {
  const max = data.length;
  const random = Math.floor(Math.random() * max);
  return new Promise((resolve, reject) => {
    resolve(data[random]);
    reject("sorry, there was an issue getting your pet");
  });
};

export default randomPet;
