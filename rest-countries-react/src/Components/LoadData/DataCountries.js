import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const DataCountries = () => {
    
    const [Countries, setCountries] = useState([]);
    
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


     return (
        <div>
            {
                Countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default DataCountries;