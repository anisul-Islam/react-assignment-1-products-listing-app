/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';
import './Products.scss';

const Products = (props) => {
  return (
    <div className="products">
      {props.products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
