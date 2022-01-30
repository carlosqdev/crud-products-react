import React from 'react';
import Product from "./Product"

function AllProducts() {
  return (
    <section className="col-md-8">
      <div style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between"}}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

export default AllProducts;
