/* eslint-disable react/prop-types */
import React from 'react';
import './ProductStyle.css'

const Products = ({img, title, price, rating, desc, index}) => {
    return (
        <div className='card' key={index}>
            <img className='card-img' src={img} alt="" />
            <div className='card-content'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-price'>Price: ${price}</p>
            <p className='card-rating'>Rating: {rating}/5</p>
            <p className='card-desc'>{desc}</p>
            <button className='btn-add-to-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;