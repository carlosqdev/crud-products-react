import React from 'react';
import Product from "./Product"

function AllProducts({allProducts, deleteProduct, currentCode, setCurrentCode}) {
  return (
    <section className="col-md-8">
      <div style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between"}}>
        {allProducts?.map(product => (
          <Product
            key={product.cod}
            cod={product.cod}
            description={product.description}
            price={product.price}
            deleteProduct={deleteProduct}
            currentCode={currentCode}
            setCurrentCode={setCurrentCode}
          />
        ))}
      </div>
    </section>
  );
}

export default AllProducts;
