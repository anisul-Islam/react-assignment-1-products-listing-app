/* eslint-disable react/prop-types */
import React from 'react'
import Product from './Product'

const Products = (props) => {
    // console.log('hello world');
    // console.log(products);
    // const { id, title, price, description, category, image, rating }
    return (
        <div>
            <h1>This is a simple websitresssss</h1>
            {/* <h4>{props.products[0].title}</h4> */}
            <section className='products'>
            {
                props.products.map((product) => {
                    console.log(product);
                    
                    return <Product key={product.id} product={product} />

                })
            }
            </section>

        </div>
    )
}

export default Products
