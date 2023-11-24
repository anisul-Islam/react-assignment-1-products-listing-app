/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

const Product = (props) => {
  const { img_src, productTitle, price, productRating, description } = props;
  return (
    <article className="product">
      <img src={img_src} alt="" />
      <div className="product__details">
        <h4 className="product__title">{productTitle}</h4>
        <p className="product__price">Price: $ {price}</p>
        <p className="product__rating">Rating: {productRating}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
