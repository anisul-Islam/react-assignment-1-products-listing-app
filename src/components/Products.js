import React from 'react';
import Product from './Product';
const Products = props => {
const products=props.Data;

        return (
            <div className='products' >
    {products.map((product,index)=> <Product product={product} key={index}  />)}
            
            </div>
            );
        };
export default Products;