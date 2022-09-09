/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product.js';
function Products(props) {
  const { products } = props;
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Products;
