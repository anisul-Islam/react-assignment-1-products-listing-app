/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = (props) => {
  const products = props.products;

  // console.log(props);
  const productsData = products.map((product, index) => (
    <Product
      id={index}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
      img={product.image}
      rating={product.rating.rate}
    />
  ));

  console.log(productsData);

  return <section className="products">{productsData}</section>;
};
export default Products;
