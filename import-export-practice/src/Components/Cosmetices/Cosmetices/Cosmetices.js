import React from 'react';
import { Add, Div, Mul, Sub } from '../../../Utillites/Addition/Add';

const Cosmetices = () => {

    const Addition = Add(1000, 4302);
    const Substct = Sub(100000, 4302);
    const Multiply = Mul(10, 4302);
    const Division = Div(100000, 4302);
    return (
        <div>
            <h1>Here this all result showing</h1>
            <p>Addtion: {Addition} <br></br> Subtract: {Substct} <br></br> Multiply: {Multiply} <br></br> Dividion: {Division} </p>
        </div>
    );
};

export default Cosmetices;