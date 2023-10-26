import React from 'react'
import Product from './Product'
export default function Products({current}) {
    console.log();
  return (
    <>
    {current.map(data=><Product key={Math.random()} title={data.title} img_src={data.image} price={data.price} description={data.description} rating={data.rating.rate}/>)}
    </>
  )
}
