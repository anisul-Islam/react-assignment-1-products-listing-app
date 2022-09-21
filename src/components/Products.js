import React from 'react';
import Product from './Product';
const Products = (props) => {
    const products = props.products;
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px",
        padding: "10px"
    }
    return (
        <div style={style}>
            {
                products.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    );
};

export default Products;