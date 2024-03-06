const AddToDB = (id) => {
    let playerCart;
    const stored = localStorage.getItem('player-cart');

    if (stored) {
        playerCart = JSON.parse(stored);
    }
    else {
        playerCart = {};
    }

    const quality = playerCart[id];
    if (quality) {
        quality = quality + 1;
        playerCart[id] = quality;
    }
    else {
        playerCart[id] = 1;
    }

    localStorage.setItem('player-cart', JSON.stringify(playerCart));
}

export {AddToDB};