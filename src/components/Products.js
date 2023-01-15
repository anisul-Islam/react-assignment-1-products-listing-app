import React from "react";
/* eslint-disable react/prop-types */
import Product from './Product';


const Products = (prop) => {

     const {products} = prop;
     console.log(products);
     // { products.map((product, index)=>
     //      {product.rating.map((rate, index)=> <p key={index}> <span>{rate.rate}</span> <span>{rate.count}</span></p>)}
     // )}
     return (
          <article className="article-products">
               <div className="products">
               {/* {products.map((product, index)=> <Product key={index} title={product.title} price={product.price} description={product.description} category={product.category} images={product.image} />)} */}
               { products.map((product, index)=> <Product key={index} count={product.rating.count} rating={product.rating.rate} title={product.title} price={product.price} description={product.description} category={product.category} images={product.image} />)}
               </div>
          </article>
     );
}

export default Products;