/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Products(data) {
    return (
        <section className='products'>
          {data.data.map(product => {
            // console.log(product)
            // const {id, category, description, image, price, rating, title} = product;
            return <div key={product.id} className="product">
                <Product  prodDetails={product} />
            </div>;
          })}
        </section>
    );
    // console.log(props.productsArr)
    // const allProducts = props.productsArr;
    // const eachdProduct = allProducts.map(product => product)
    // return (<Product  eachdProduct />)
}
  
export default Products;