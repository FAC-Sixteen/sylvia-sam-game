const getPetData = (name) => {
 return fetch(`https://neopets.herokuapp.com/api/?search=${name}&key=sylvia`)
    .then(response => {
        if(response.status !== 200) {
            console.log(`Error with response ${response.status}`);
            return;
        }
        return response.json();
    })
    .catch(err => {
        throw new Error(err)
    })
}

export default getPetData;