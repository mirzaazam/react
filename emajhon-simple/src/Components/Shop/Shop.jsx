import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {

    const [products, setProducts] = useState([]); 
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    
    const loadCardData = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product loadCardData = {loadCardData} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='order-summary'>
                <h4>Order summary</h4>
                <h5>Selected Item: {cart.length} </h5>
            </div>
        </div>
    );
};

export default Shop;