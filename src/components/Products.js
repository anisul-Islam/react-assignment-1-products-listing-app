/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = (props) => {
  const { products } = props;
  const produtcsCard = products.map((product, id) => <Product product={product} key={id} />);

  return <section className="products">{produtcsCard}</section>;
};

export default Products;
