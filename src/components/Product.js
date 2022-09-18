/* eslint-disable react/prop-types */
import React from 'react';


const Product = (props) => {
  // console.log(props.prodDetails)
  const {id, category, description, image, price, rating, title} = props.prodDetails;
  // console.log(rating)
  return (
      <article>
      <img className='product__img' src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className='product__price'>Price: $ {price}</p>
        <p className='product__rating'>Rating: {rating.rate}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
