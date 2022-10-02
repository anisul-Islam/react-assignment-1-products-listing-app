import React from 'react';
import Product from './Product';
const Products = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, price, description, src } = props;
  return (
    <div>
      <Product title={title} price={price} description={description} src={src} />
    </div>
  );
};

export default Products;
