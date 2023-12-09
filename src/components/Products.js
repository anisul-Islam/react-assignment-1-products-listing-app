/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = (props) => {
  const {products} = props;
  const product = products.map(product =>
    <Product key={product.id} product={product} />)
  return (
    <section className='products'>
      {product}
    </section>
  );
};

export default Products;
