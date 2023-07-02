/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import Product from './Product';

export default function Products(props) {
  return (
  <>
    <Product img={props.image} title={props.title} description={props.description} price={props.price} rate={props.rate}  />
    {/* <Product img={props.image} title={props.title} description={props.description} price={props.price} rate={props.rate}  />
    <Product img={props.image} title={props.title} description={props.description} price={props.price} rate={props.rate}  />
    <Product img={props.image} title={props.title} description={props.description} price={props.price} rate={props.rate}  />
    <Product img={props.image} title={props.title} description={props.description} price={props.price} rate={props.rate}  />
    <Product img={props.image} title={props.title} description={props.description} price={props.price} rate={props.rate}  /> */}

  </>
  )
}
