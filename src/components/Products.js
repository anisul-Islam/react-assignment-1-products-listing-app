/* eslint-disable react/prop-types */
import React from 'react'

const Products = (props)=>{
    console.log(props)
    const {id,title,price,description,catagory,image,rating}=props.value
    return(
        <div className="products">
            <article >
                    <img src={image} alt="" />
                    <div className="product__details">
                        <h4 className="product__title">Title:{title} </h4>
                        <p className='product__price'>Price:{price} </p>
                        <p className='product__rating'>Rating:{rating.rate}/5 </p>
                        <p className="product__desc"> Description:{description} </p>
                        <button className="product__btn btn"> Add to cart </button>
                    </div>
            </article>
        </div>
 
    )
}
export default Products