/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({title,img_src,price,rating,description}) => {
  return (
      <article className="product">
      <img src={img_src} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className='product__price'>Price: ${price}</p>
        <p className='product__rating'>Rating: {rating}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
