/* eslint-disable react/prop-types */
import Product from "./Product";


function Products (props){
    const {product} = props;
    return (
        <div className="products">
            {
                product.map((item)=>{
                    <Product key={item.id} product={item} />
                })
            }
        </div>
        )
}

export default Products;

