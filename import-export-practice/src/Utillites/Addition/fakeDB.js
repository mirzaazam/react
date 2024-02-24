
const AddToDB = (id) => {
    let shoppingCart;
    const stored = localStorage.getItem('shopping-cart');

    if (stored) {
        shoppingCart = JSON.parse(stored);
    }
    else {
        shoppingCart = {};
    }

    const quality = shoppingCart[id];
    if (quality) {
        const newQuality = quality + 1;
        shoppingCart[id] = newQuality;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const RemoveFromCart = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            const quantity = shoppingCart[id];
            if(quantity > 1){
                const newQuality = quantity - 1;
                shoppingCart[id] = newQuality;
            }
            else{
                delete shoppingCart[id];
            }
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}


export { AddToDB, RemoveFromCart };