/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';
const Products = (props) => {
    let items = [];
    items = props.items;
    return items.map((item) => {
        <Product 
            title={item.title} 
            price={item.price} 
            desc={item.price} 
            category={item.category} 
            image={item.image} 
            rate={item.rating.rate}/>
    })
}
export default Products;