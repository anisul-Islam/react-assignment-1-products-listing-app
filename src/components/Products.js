import React from "react";
/* eslint-disable react/prop-types */
import Product from './Product';


const Products = (prop) => {

     const {products} = prop;
     return (
          <article className="article-products">
               <div className="products">
               { products.map((product, index)=> <Product key={index} count={product.rating.count} rating={product.rating.rate} title={product.title} price={product.price} description={product.description} category={product.category} images={product.image} />)}
               </div>
          </article>
     );
}

export default Products;