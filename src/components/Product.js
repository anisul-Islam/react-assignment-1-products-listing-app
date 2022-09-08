/* eslint-disable react/prop-types */
import React from 'react';

const Product = () => {
  return (
      <article className="product">
      <img src="" alt="" />
      <div className="product__details">
        <h4 className="product__title">product title</h4>
        <p>Price: $ product price</p>
        <p>Rating: product rating rate/5</p>
        <p className="product__desc">Description: product.description</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
