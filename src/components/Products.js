/* eslint-disable */

/* eslint-disable react/prop-types */

import Product from './Product';

const Products = ({ productsData }) => {
  return (
    <div className='products'>
      {productsData.map((product, index) => (
        <Product className="product" product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
