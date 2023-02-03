/* eslint-disable */
import React from 'react';

const Product = (props) => {
  const { image, title, price, description, rating, id } = props.product;
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product_price">Price: ${price}</p>
        <p className="product_rating">Rating: {rating.rate}/5</p>
        <p className="product__desc">Description:{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
