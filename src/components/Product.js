/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  // const id = props.id;
  const title = props.title;
  const price = props.price;
  const description = props.description;
  // const category = props.category;
  const image = props.image;
  const rating = props.rating;
  return (
    <>
      <article className="product">
        <img src={image} alt="" />
        <div className="product__details">
          <h4 className="product__title">{title}</h4>
          <p>Price: ${price}</p>
          <p>Rating:{rating}/5</p>
          <p className="product__desc">Description: {description}</p>
          <button className="product__btn btn">Add to cart</button>
        </div>
      </article>
    </>
  );
};

export default Product;
