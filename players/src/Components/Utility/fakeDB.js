const AddToDB = (id) => {
    let playerCart = getShoppingCart();
    let quantity = playerCart[id];

    if (!quantity) {
        playerCart[id] = 1
    }
    else {
        quantity = quantity + 1;
        playerCart[id] = quantity;
    }

    localStorage.setItem('player-cart', JSON.stringify(playerCart));
}

const getShoppingCart = () => {
    let playerCart = {};
    const stored = localStorage.getItem('player-cart');

    if (stored) {
        playerCart = JSON.parse(stored);
    }
    return playerCart;
}

export {
    AddToDB,
    getShoppingCart
};