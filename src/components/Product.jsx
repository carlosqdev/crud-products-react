import React from 'react';

function Product({cod, description, price, deleteProduct, currentCode, setCurrentCode}) {
  return (
    <section style={{maxWidth: "20rem"}} className="card border-primary mb-3">
      <header className="card-header">
        <h3>Información del producto</h3>
      </header>
      <div className="card-body">
        <p className="card-text">Codigo: {cod}</p>
        <p className="card-text">Descripción: {description}</p>
        <p className="card-text">Precio: ${price}</p>
      </div>
      <div style={{padding: "1rem"}} className="d-grid gap-2 mb-2">
        <button
          onClick={() => setCurrentCode(cod)}
          className="btn btn-secondary">Editar</button>

        {currentCode <= 0 && (
          <button
            onClick={() => deleteProduct(cod)}
            className="btn btn-danger">Eliminar</button>
        )}
      </div>
    </section>
  );
}

export default Product;
