import React from 'react';
import Product from './Product';
export default function Products(props) {
  const p = props.products.map((product) => <Product product={product} />);

  return <div className="products">{p}</div>;
}
