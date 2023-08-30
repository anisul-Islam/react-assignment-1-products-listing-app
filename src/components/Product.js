/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  const id = props.productdata.id;
  const title = props.productdata.title;
  const image = props.productdata.image;
  const price = props.productdata.price;
  const rate = props.productdata.rating.rate;
  const description = props.productdata.description;

  // console.log(id);
  // console.log(image);
  // console.log(title);
  // console.log(price);
  // console.log(rate);
  // console.log(description);
  return (
    <article className="product" key={id}>
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">Price: ${price}</p>
        <p className="product__rating">Rating: {rate}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
