/* eslint-disable react/prop-types */
import Product from '../components/Product';

const Products = (props) => {
  const products = props.products;
  return (
    <div className="products">
      {products.map((product, index) => {
        const { id, title, price, description, category, image, rating } = product;
        return (
          <Product
            key={index}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating.rate}
          />
        );
      })}
    </div>
  );
};

export default Products;
