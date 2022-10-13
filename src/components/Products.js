import React from 'react';
import Product from './Product.js';

const Products =({ products })=>{
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;