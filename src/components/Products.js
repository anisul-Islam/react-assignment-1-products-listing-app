/* eslint-disable*/

import React from 'react';
import Product from './Product';
const Products = (props) => {
  console.log(props.products)
  return (
    <div className='products'>
      {
        props.products.map((item)=>{
          return(
            <Product key={item.id} products={item}></Product>
          )
          
        })
      }
    </div>
  )
}

export default Products