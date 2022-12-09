import Product from './Product';

/* eslint-disable react/prop-types */

const Products = (props) => {
  const { products } = props;
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
