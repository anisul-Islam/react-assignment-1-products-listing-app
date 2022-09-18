import React from "react";

import Product from "./Product.js";

function Products ({products}){
  
  return (<div className="products">
  
  {products.map((product, id) => (<Product key={id} product={product} /> ))}    
  
        
</div>
);

};

export default Products;

