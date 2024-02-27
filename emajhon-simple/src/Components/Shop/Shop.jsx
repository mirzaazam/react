import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
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
                <Cart Cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;