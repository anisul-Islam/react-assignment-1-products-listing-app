/* eslint-disable react/prop-types */
//import React from 'react';
//import Product from './Product';
const Products = (props) => {
    let items = [];
    items = props.items;
    console.log(items);
    items.map((item, index) => {
        console.log(item+index);
    })
}
export default Products;