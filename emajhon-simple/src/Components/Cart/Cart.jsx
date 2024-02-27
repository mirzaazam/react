import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.Cart;

    let total = 0;
    for(const item of cart){
        total = total + item.price;
    }

    return (
        <div className='product-summary'>
            <h3>Order summary</h3>
            <h4>Selected Item: {cart.length} </h4>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: $ </p>
            <p>Tax: $ </p>
            <h4>Grand total: $</h4>
        </div>
    );
};

export default Cart;