import React, { useEffect, useState } from 'react';
import Show_Api from './Show_Api';

const ShowApi_json = () => {

    const [parsons, setPersons] = useState([]);

    useEffect(() => {
            fetch('persons.json')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    return (
        <div>
            {
                parsons.map( person => <Show_Api key= {person.id} person = {person}></Show_Api>)
            }
        </div>
    );
};

export default ShowApi_json;