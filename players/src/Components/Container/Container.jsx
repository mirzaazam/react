import React, { useEffect, useState } from 'react';
import './Container.css';
import Player from '../Player/Player';

const Container = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() =>{
        fetch('../../../public/players.json')
        .then(response => response.json())
        .then(data => setPlayers(data));
    } , []);


    return (
        <div className='container'>
            <div className='card-container'>
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
            <div>
                <h4>Summary of players</h4>
            </div>
        </div>
    );
};

export default Container;