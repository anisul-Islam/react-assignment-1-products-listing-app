/* eslint-disable  */
/* eslint-disable react/prop-types */


import React from 'react';

import Product  from "./Product";




 function Products({ products }){
   console.log(products);
    return (
        <div className='products'>

            {products.map((product, index) => {
                return (
                    
                <Product key={index} product={product} />
                );
            })}
            
        </div>

       
    );

   
}

export default Products;