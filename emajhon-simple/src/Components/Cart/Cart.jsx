import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.Cart;
    console.log(cart);
    let total = 0;
    let shippingTotal = 0;
    let quantity = 0;
    for (const item of cart) {
        if (item.quantity === 0) {
            item.quantity = 1;
        }
        // //shortCut prosess
        // item.quantity = item.quantity || 1;
        total = total + item.price * item.quantity;
        shippingTotal = shippingTotal + item.shipping * item.quantity;
        quantity = quantity + item.quantity;
    }
    const tax = total * 7 / 100;
    const GrandTotal = total + shippingTotal + tax;

   return (
        <div className='product-summary'>
            <h3>Order summary</h3>
            <h4>Selected Item: {quantity} </h4>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: ${shippingTotal} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h4>Grand total: ${GrandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;