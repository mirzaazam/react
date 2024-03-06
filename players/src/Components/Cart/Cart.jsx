import React from 'react';
import './Cart.css';

const Cart = ({ player }) => {

    let total = 0;
    for (const plyr of player) {
        total = total + plyr.salary;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + tax;
    return (
        <div className='player-info'>
            <div className='player-header'><h4>Player info</h4></div>
            <div>
                <h4>Player Selected: {player.length} </h4>
                <h4>Total player price: ${total} </h4>
                <h4>Tax: ${tax} </h4>
                <h4>Grand Total: ${grandTotal} </h4>
            </div>

            <div className='list-container'>
                <h4 className='Player-list'>List of players</h4>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                    <li>e</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;