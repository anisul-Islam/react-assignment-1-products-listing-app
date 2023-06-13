/* eslint-disable react/prop-types */
import Product from "./Product";

function Products(props) {
const {products} = props;
const product = products.map((product,id) => <Product key ={id} product ={product} />)
    return (
        <div className="products">
            { product }
        </div>
    );


}

export default Products;