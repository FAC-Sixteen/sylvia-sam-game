import React from 'react';

import getPetData from '../utils/getPetData';
import './Pet.css';

const Pet = (props) => {
    const name = "Cybunny";
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        getPetData(name).then(response => {
            setData(response[0])
        })
    }, [name])

    console.log(data);


    if(!data) return <div>NeoPet Loading...</div>
    return (
        <div className="pet-container">
        <img className="pet-img" src={data.image} alt={data.name}/>
            
        </div>
    )
}
export default Pet;