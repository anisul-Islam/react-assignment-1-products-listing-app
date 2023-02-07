/* eslint-disable react/prop-types */
import React from "react";

const Product = ( {products} ) => {
  const {id, title, price, description, category, image, rating } = products;
  return (
      <div key={id}>
              <article className="product">
          <img src={image} alt="" />
          <div className="product__details">
            <h4 className="product__title">Title: {title}</h4>
            <h4 className="product__title">Title: {category}</h4>
            <p className="product__price">Price: $ {price}</p>
            <p className="product__rating">Rating: {rating.rate}/5</p>
            <p className="product__desc">Description: {description}</p>
            <p className="product__count">count: {rating.count}</p>
            <button className="product__btn btn">Add to cart</button>
          </div>
        </article>
      </div>
  );
};

export default Product
