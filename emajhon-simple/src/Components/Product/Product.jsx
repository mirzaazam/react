import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const loadCardData = props.loadCardData;
    return (
        <div className='product-card'>
            <div className='img-info'>
                <div className='product-img'>
                    <img src={img} alt="not found" />
                </div>
                <div className='product-info'>
                    <h4>{name}</h4>
                    <h5>Price: {price}</h5>
                    <p>Manufacture: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>

            <div>
                <button onClick={() => loadCardData(props.product)} className='btn'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;