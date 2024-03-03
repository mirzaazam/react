import React from 'react';
import './Player.css';

const Player = (props) => {
    const { image, club, age, country, name, salary } = props.player;
    return (
        <div className='card'>
            <div>
                <div className='img-container'>
                    <img className='card-img' src={image} alt="" />
                </div>
                <div className='card-info'>
                    <h3>Name: {name}</h3>
                    <p>Country: {country}</p>
                    <p>Club: {club}</p>
                    <p>Age: {age}</p>
                    <p>Price: {salary}</p>
                </div>
            </div>

            <div>
                <button className='btn'>Buy player</button>
            </div>
        </div>
    );
};

export default Player;