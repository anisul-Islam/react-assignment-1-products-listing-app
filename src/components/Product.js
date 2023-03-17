/* eslint-disable react/prop-types */
import React from "react";

const Product = (props) => {
    const {title, images, rating, count, price, description,  category} = props;

    return (<div className='product'>
              <img src={images} alt="" />
              <div className="product__details">
                <h4 className="product__title">{category} - {title}</h4>
                <p className='product__price'>Price: $ {price}</p>
                <p className='product__rating'>Rating:{rating} {count} rate/5</p>
                <p className="product__desc">Description: {description}</p>
                <button className="product__btn btn">Add to cart</button>
              </div>
            </div>
          );
        };
  
export default Product;
