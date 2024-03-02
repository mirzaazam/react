import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { AddToDB, getShoppingCart } from '../Utilities/fakeDB';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('../../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        //step 1: get id of the added product
        for (const id in storedCart) {
            //step 2: get product from products using state by id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
            // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
            }
            console.log(addedProduct);
        }

    }, [products]);

    const loadCardData = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        AddToDB(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product loadCardData={loadCardData} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='order-summary'>
                <Cart Cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;