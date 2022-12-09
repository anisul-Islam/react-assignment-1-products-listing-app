import Product from './Product';

/* eslint-disable react/prop-types */

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((pro, index) => (
        <Product
          key={index}
          title={pro.title}
          description={pro.description}
          image={pro.image}
          price={pro.price}
          rate={pro.rating.rate}
        />
      ))}
    </section>
  );
};

export default Products;
