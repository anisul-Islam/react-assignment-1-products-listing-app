import React from "react";
import Product from "./Product";


const Products = ({products}) => {
    const singleProduct = products.map(product => <Product key={product.id} product={product}/>)
    return (
        <div className="products">
            {singleProduct}
        </div>
    )
};

export default Products;