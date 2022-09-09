/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ info }) => {
  return (
    <article className="product">
      <img className="product__img" src={info.image} alt={info.title} />
      <div className="product__details">
        <h4 className="product__title">{info.title}</h4>
        <p className="product__price">Price: ${info.price}</p>
        <p className="product__rating">
          Rating: {info.rating?.rate}/5
          {` (${info.rating?.count})`}
        </p>
        <p className="product__desc">{info.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
