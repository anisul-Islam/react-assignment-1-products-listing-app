/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';
const Products = (props) => {
    let items = [];
    items = props.items;
    return (items.map((item, index) => {
        return <Product 
            key={index}
            title={item.title} 
            price={item.price} 
            desc={item.description} 
            image={item.image} 
            rate={item.rating.rate}
            />
    }));
}
export default Products;