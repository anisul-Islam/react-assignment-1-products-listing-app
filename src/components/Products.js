/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product'

const Products = ({datas}) => {
  return (
    <div className="products">
        {datas.map((product) => {
                return <Product key={product.id} title={product.title} price={product.price} description={product.description} rating={product.rating.rate} image={product.image}/>
            })}
    </div>
   
  );
};

export default Products;
