/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import '../index.css';
import Product from './Product';

const Products = (props) => {
  return (
    <div className="products">
      {props.products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
