/* eslint-disable react/prop-types */
import Product from "./Product";

function Products({ products }) {
  let productItem = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <section className="products">{productItem}</section>;
}

export default Products;
