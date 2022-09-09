/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product.js';

export default function Products({ products }) {
  return (
    <div className="products">
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
}
