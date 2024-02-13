
import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, popultion, area, flags} = props.country;
    console.log(props.country.flags.png)
     return (
        <div className='container'>
            
            <h1>Country Name: {name.common}</h1>
            <h1>Population: {popultion}</h1>
            <h3 id='areaColor'>Area: {area}</h3> 
            <img src={flags.png}></img>
           
            
        </div>
    );
};

export default Country;