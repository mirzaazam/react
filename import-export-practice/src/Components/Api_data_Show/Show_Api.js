import React from 'react';
import './Show_Api.css';

const Show_Api = (props) => {
    const { name, id, age, phone } = props.person;
    
    return (
        <div className='container'>
            <p>Name: {name} </p>
            <p>Id: {id} </p>
            <p>Age: {age} </p>
            <p>Phone: {phone} </p>
        </div>
    );
};

export default Show_Api;