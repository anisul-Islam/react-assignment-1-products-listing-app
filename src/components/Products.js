import React from 'react';
import Product from './Product';

export default function Products(props) {
 
  return (
    <div className='products'>

      {props.data.map((item) => {
       
        return <Product item={item} />
      })}

    </div>
  )
}
