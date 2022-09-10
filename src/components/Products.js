/* eslint-disable react/prop-types */
import React from 'react';
import Prodict from "./Product"
import App from "../App"


const Products = (props) => {
    const {products} = props
    
    return (
        <div className='products'>
            {
                products.map((item, index)=><Prodict key={index} title= {item.title} image = {item.image} description = {item.description} price = {item.price} rating = {item.rating.rate}/>)
            }
            
        </div>
    );
}

export default Products;
