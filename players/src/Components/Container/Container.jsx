import React, { useEffect, useState } from 'react';
import './Container.css';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Container = () => {
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState({});
    console.log(player)

    useEffect(() => {
        fetch('../../../public/players.json')
            .then(response => response.json())
            .then(data => setPlayers(data));
    }, []);

    const getPlayerInfo = (player) => {
        setPlayer(player);
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