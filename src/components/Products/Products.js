import React from 'react';
import Product from '../Product/Product';
import "./products.css"
const Products = (props) => {
    const products = props.products;
    return (
        <div className='products'>
            {
                products.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    );
};

export default Products;