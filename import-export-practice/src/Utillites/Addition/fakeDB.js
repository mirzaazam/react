
const AddToDB = (id) => {
    let shoppingCart;
    const stored = localStorage.getItem('shopping-cart');
    
    if(stored){
        shoppingCart = JSON.parse(stored);
    }
    else{
        shoppingCart = {};
    }

    const quality = shoppingCart[id];
    if (quality){
        const newQuality = quality + 1 ;
        shoppingCart[id] = newQuality;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
export { AddToDB };