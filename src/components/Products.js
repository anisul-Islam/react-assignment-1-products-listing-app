/* eslint-disable react/prop-types */
import { products } from "../App";
import Product from "./Product";

const Products = () => {
  return (
    <>
        <section className="products">
        {products.map((product) => {
        console.log(product);
        return (
          <Product
            title={product.title}
            price={product.price}
            description={product.description}
            rate={product.rating.rate}
            image={product.image}
          />
        );
      })}
        </section>
    </>
  );
};

export default Products;