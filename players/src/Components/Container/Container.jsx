import React, { useEffect, useState } from 'react';
import './Container.css';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import { AddToDB } from '../Utility/fakeDB';

const Container = () => {
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState([]);
    console.log(players);
    useEffect(() => {
        fetch('../../../public/players.json')
            .then(response => response.json())
            .then(data => setPlayers(data));
    }, []);

    localStorage.setItem('player-cart', JSON.stringify(player));

    const getPlayerInfo = (plyr) => {
        let newCart = [...player, plyr];
        setPlayer(newCart);
    }

    return (
        <div className='container'>
            <div className='card-container'>
                {
                    players.map(player => <Player getPlayerInfo={getPlayerInfo} key={player.id} player={player}></Player>)
                }
            </div>
            <div className='cart-container'>
                <Cart player={player}></Cart>
            </div>
        </div>
    );
};

export default Container;