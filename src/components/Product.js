/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({title,price,description,rating,image}) => {
  return (
    
      <article className="product">
      <img src={image} alt="kh" className="product__img"/>
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rating}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
