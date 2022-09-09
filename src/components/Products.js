/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className="products">
      {
        //
        products.map((p, i) => (
          <Product info={p} key={i} className="product__card" />
        ))
      }
    </div>
  );
};

export default Products;
