
import React, { useState } from 'react';

const ShowPower = () => {
    const [power, setPower] = useState(1);

    const increasePower = () => setPower(power * 2);

    return (
        <div>
            <h1>
                Power: {power}
            </h1>
            <button onClick={increasePower}>
                Increase the power
            </button>
        </div>
    );
};

export default ShowPower;