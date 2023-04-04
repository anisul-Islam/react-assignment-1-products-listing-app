/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

function Products(props) {
  const {products} = props;

  let product = [];
  product = products.map((product) =>{
    return(<Product key={product.id} product={product} />)
  })
  return(
    <section className="products">
      {product}
    </section>
  )
}

export default Products;