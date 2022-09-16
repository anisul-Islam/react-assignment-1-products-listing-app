import React from 'react';
import Product from './components/Product';
import Data from "./Products";


function App(){
  return <div>
      <h1 className="title">BD Mega <span className="bdcol">Store</span></h1><section className="products">
      {Data.map((item) => <Product id={item.id} image={ item.image} title= {item.title} price= {item.price} description={item.description} rating={item.rating.rate} /> )}    
      </section>
    </div>
}

export default App;