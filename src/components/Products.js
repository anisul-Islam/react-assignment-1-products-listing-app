import React from 'react'
import Product from './Product'
export default function Products({current}) {
    console.log();
  return (
    <>
    {current.map(data=><Product key={data.id} product = {data}/>)}
    </>
  )
}
