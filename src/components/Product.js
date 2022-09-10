/* eslint-disable react/prop-types */
import React from 'react';
import './Product.scss';
const Product = (props) => {
  const { title, price, rating, description, image } = props.product;
  console.log(title);
  const rate = rating.rate;
  return (
    <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="text-color">Price: ${price}</p>
        <p className="text-color">Rating: {rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
