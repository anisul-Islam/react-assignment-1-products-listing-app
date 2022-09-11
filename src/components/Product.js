/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({newData}) => {
  const { title, price, description, category, image, rating} = newData
  console.log(newData)
  return (
      <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title mb-0">{title}</h4>
        <p className='product__price mb-0'>Price: ${price}</p>
        <p className='product__rating mb-0'>Rating: {rating.rate}/5</p>
        <p className="product__desc mb-1">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
