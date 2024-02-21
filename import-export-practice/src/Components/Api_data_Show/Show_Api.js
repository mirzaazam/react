import React from 'react';

const Show_Api = (props) => {
   const  {name, id, age, phone} = props.person;
    return (
        <div>
            <p>Name: {name} </p>
            <p>Id: {id} </p>
            <p>Age: {age} </p>
            <p>Phone: {phone} </p>
        </div>
    );
};

export default Show_Api;