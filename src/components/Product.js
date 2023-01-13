/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  console.log("props");
  return (
      <article className="product">
        <div className="image-div">
          <img src={props.image} alt="" />
        </div>
        <div className="product__details">
          <div className="prod_title">
            <h4 className="product__title">{props.title}</h4>
          </div>
          <p>Price: $ {props.price}</p>
          <p>Rating: {props.rate}/5</p>
          <button className="product__btn btn">Add to cart</button>
        </div>
      </article>
  );
};

export default Product;
