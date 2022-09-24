/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = (props) => {
    const products = props.products;
    const product = products.map(product => < Product items={product} key={product.id} />)

    return (

        <div className="products">
            {product}
        </div>
    );
};

export default Products;
