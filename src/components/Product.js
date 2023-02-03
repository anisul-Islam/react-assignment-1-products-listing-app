/* eslint-disable react/prop-types */
import React from "react";

const Product = (props) => {
  const { image, productTitle, price, rating, desc } = props;
  const { rate, count } = rating;

  return (
    <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{productTitle}</h4>
        <p className="product__price">{price}</p>
        <p className="product__rating">
          {rate}/{count}
        </p>
        <p className="product__desc">{desc}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
