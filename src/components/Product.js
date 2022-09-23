/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  const { id, title, price, description, category, img, rating } = props;
  return (
    <article className="product" key={id}>
      <img src={img} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <h5 className="product_category product__rating">category : {category}</h5>
        <p className="product__price">Price: $ {price}</p>
        <p className="product__rating">Rating: {rating} /5</p>
        <p className="product__desc"> {description} </p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
