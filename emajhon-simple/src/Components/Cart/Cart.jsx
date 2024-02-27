import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.Cart;

    let total = 0;
    let shippingTotal = 0;
    for (const item of cart) {
        total = total + item.price;
        shippingTotal = shippingTotal + item.shipping;
    }
    const tax = total * 7 / 100;
    const GrandTotal = total + shippingTotal + tax;

    return (
        <div className='product-summary'>
            <h3>Order summary</h3>
            <h4>Selected Item: {cart.length} </h4>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: ${shippingTotal} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h4>Grand total: ${GrandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;