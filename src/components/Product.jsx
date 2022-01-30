import React from 'react';

function Product() {
  return (
    <section style={{maxWidth: "20rem"}} className="card border-primary mb-3">
      <header className="card-header">
        <h3>Información del producto</h3>
      </header>
      <div className="card-body">
        <p className="card-text">Codigo: 11212</p>
        <p className="card-text">Descripción: Camiseta color azul</p>
        <p className="card-text">Precio: $20.00</p>
      </div>
      <div style={{padding: "1rem"}} class="d-grid gap-2 mb-2">
        <button className="btn btn-secondary">Editar</button>
        <button className="btn btn-danger">Eliminar</button>
      </div>
    </section>
  );
}

export default Product;
