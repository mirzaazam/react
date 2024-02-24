import React from 'react';
import './Show_Api.css';
import { AddToDB } from '../../Utillites/Addition/fakeDB';

const Show_Api = (props) => {
    // console.log(props);
    const { name, id, age, phone } = props.person; // distracturing 
    const AddToCart = (id) => {
        AddToDB(id);
    }
    const GetAddToCart = () => AddToCart(id);

    return (
        <div className='container'>
            <p>Name: {name} </p>
            <p>Id: {id} </p>
            <p>Age: {age} </p>
            <p>Phone: {phone} </p>
            <button onClick={GetAddToCart}>Add To Cart</button>
        </div>
    );
};

export default Show_Api;