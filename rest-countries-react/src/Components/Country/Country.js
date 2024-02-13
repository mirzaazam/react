
import React from 'react';
import './Country.css';

const Country = (props) => {
    
    return (
        <div className='container'>
            
            <h1>Country Name: {props.name}</h1>
            <h1>Population: {props.popultion}</h1>
            <h3 id='areaColor'>Area: {props.area}</h3>
            <img src={props.img}></img>
           
            
        </div>
    );
};

export default Country;