import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './DataCountries.css';

const DataCountries = () => {
    
    const [Countries, setCountries] = useState([]);
    
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


     return (
        <div className='main-container'>
            {
                Countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default DataCountries;