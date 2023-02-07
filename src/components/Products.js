/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

function Products( {products} ) {
  return (
    <div className="products">
      {products.map((products, id) => (
            <Product key={id} products={products} />
      ))}
    </div>
  );
};

export default Products;
