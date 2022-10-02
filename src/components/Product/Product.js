/* eslint-disable react/prop-types */
import React from 'react';
import "./product.css"

const Product = (props) => {
  const { image, title, price ,rating, description } = props.product
  return (
      <article className="product">
        <img src={image} alt="" />
        <div className="product__details">
          <h3 className="product__title">{title}</h3>
          <p className='price'>Price: $ {price}</p>
          <p className='rate'>Rating: {rating.rate}</p>
          <p className="product__desc">Description:{description} </p>
            <button className="product__btn btn">Add to cart</button>
        </div>
    </article>
  );
};

export default Product;
