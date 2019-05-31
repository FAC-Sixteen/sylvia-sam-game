const randomPet = data => {
  console.log(data);
  const max = data.length;
  const random = Math.floor(Math.random() * max);
  return new Promise((resolve, reject) => {
    resolve(data[random]);
    reject("sorry, nope");
  });
};

export default randomPet;
