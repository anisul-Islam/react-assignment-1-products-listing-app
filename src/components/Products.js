/* eslint-disable react/prop-types */

import Product from "./Product"

const Products = (props) => {
  return (
    <section className="products" >
    {
      props.products.map(product => <Product product={product} key={product.id} />)
    }
  </section>
  )
}

export default Products