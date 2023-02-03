/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

const Products = (props) => {
  //   console.log(props);
  return (
    <div className="products">
      {props.productsData.map((element) => {
        // console.log(element);
        const { id, image, price, rating, title, description } = element;
        return (
          <Product
            key={id.toString()}
            productTitle={title}
            price={price}
            rating={rating}
            desc={description}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Products;
