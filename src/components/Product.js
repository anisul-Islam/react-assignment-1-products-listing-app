/* eslint-disable react/prop-types */
import React from 'react';




const Product = ({product}) => {
    // This is called destructuring
 const {image, title, price, rating, description } = product;
  return (<article className="product">
  <div className="product_details">
  <img src={image} alt="" />
    <h4 className="product_title">{title}</h4>
    <p className="product_price">Price: ${price}</p>
    <p className="product_rating">Rating: {rating.rate}/5</p>
    <p className="product_desc">Description: {description}</p>
    <button className="product_btn btn">Add to cart</button>
  </div>
  </article>

  );
};

export default Product;