/* eslint-disable react/prop-types */
import React from 'react';
import "./product.css"

const Product = (props) => {
  return (
      <article className="product">
        <img src={props.product.image} alt="" />
        <div className="product__details">
          <h3 className="product__title">{props.product.title}</h3>
          <p className='price'>Price: $ {props.product.price}</p>
          <p className='rate'>Rating: {props.product.rating.rate}</p>
          <p className="product__desc">Description:{props.product.description} </p>
            <button className="product__btn btn">Add to cart</button>
        </div>
    </article>
  );
};

export default Product;
