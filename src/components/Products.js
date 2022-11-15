/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = ( { produntsDada }) => {
    return (
        <div>
            { produntsDada.map((item)=>(
                <Product key={item.id } data={item } />
            ))}
        </div>
    );
};

export default Products;