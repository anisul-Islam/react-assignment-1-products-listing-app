/* eslint-disable react/prop-types */
import Product from './Product';


const Products = (props) => {

     const {products} = props;
     const items = products.map((product)=> <Product key={product.id} count={product.rating.count} rating={product.rating.rate} title={product.title} price={product.price} description={product.description} category={product.category} images={product.image} />);

     return (
          <article className="article-products">
               <div className="products">
                    {items}
               </div>
          </article>
     );
}

export default Products;
