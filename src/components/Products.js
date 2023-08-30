/* eslint-disable prettier/prettier */
import Product from './Product';
function Products(props) {
  //   products.map((product) => console.log(product));
  return (
    <>
      <div className="products">
        {
          // eslint-disable-next-line react/prop-types
          props.ProductsData.map((product, index) => {
            return <Product key={index} productdata={product} />;
          })
        }
      </div>
    </>
  );
}

export default Products;
