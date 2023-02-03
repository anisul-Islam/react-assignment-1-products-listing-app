/* eslint-disable */
import React from 'react';
import Product from './Product';

// const products = (props) => {
//   console.log(props.image);
//   const { img, title, price, rating, desc } = props;
//   return (
//     <div>
//       <div className="product">
//         <img src={img} className="product_img"></img>
//         <div className="product_details">
//           <h3 className="product_title">{title}</h3>
//           <p className="product_price">Price : ${price}</p>
//           <p className="product_rating">Rating : {rating}/5</p>
//           <p className="product_description">Description : {desc}</p>
//           <button className="btn">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default products;

const Products = (props) => {
  const { products } = props;
  const product = products.map((product) => <Product key={product.id} product={product} />);
  return (
    <div>
      <h1 className="title">BD Store</h1>
      <div className="products">{product}</div>
    </div>
  );
};
export default Products;
