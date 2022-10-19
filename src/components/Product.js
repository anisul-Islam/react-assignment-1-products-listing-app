/* eslint-disable  */
/* eslint-disable react/prop-types */

import React from 'react';

const Product = ({ product }) => {
  // console.log(product);

  let { title, price,  description, image, } = product;
    
      let {rate} = product.rating;
  // console.log(rate);

  return (
      <article className="product">
      <img src={image} alt="Product_img" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className='product__price'>Price: ${price}</p>
        <p className='product__rating'>Rating: {rate}/5</p>
        <p className="product__desc">Description:{description} </p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
