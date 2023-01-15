/* eslint-disable react/prop-types */
import React from 'react';

const Product = (prop) => {
  const {title, images, rating, count, price, description,  category} = prop;
  return (<div className='product'>
            <img src={images} alt={title} />
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
