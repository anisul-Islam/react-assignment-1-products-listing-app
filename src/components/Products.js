/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

function Products(props){
    const{products} = props;
    return(
        <div className="products"> 
         {products.map((product) =>
         <Product key={product.id} product={product}></Product>)}
        </div>
    );
}

export default Products;