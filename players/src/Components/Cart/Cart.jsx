import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const {age, club, country, salary} = props.player;

    return (
        <div className='player-info'>
            <div className='player-header'><h4>Player info</h4></div>
            <div>
                <h4>Player Selected: </h4>
                <h4>Player Rate: {salary} </h4>
                <h4>Club: {club} </h4>
                <h4>Age: {age} </h4>
                <h4>Country: {country} </h4>
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