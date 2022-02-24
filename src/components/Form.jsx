import React, { useState, useEffect } from "react";
import { notify } from "../services/notify";

const initialState = {
  cod: "",
  description: "",
  price: "",
};

function Form({ addOrUpdateProduct, currentCode, allProducts }) {
  const [product, setProduct] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(product.cod.trim().length > 0 && product.description.trim().length > 0) {
      if(product.price.trim().length > 0) {
        addOrUpdateProduct(product);
        setProduct(initialState);
      }else {
        notify("Falta llenar campos del formulario");
      }
    }else {
      notify("Falta llenar campos del formulario");
    }
  };

  useEffect(() => {
    if (currentCode > 0) {
      let currentProduct = allProducts.filter(
        (product) => product.cod === currentCode
      );
      setProduct(currentProduct[0]);
    }
  }, [currentCode]);

  return (
    <form onSubmit={handleSubmit} className="col-md-4">
      <div className="form-group">
        <label className="form-label" htmlFor="cod">
          Codigo
        </label>
        <input
          onChange={handleChangeInput}
          value={product.cod}
          className="form-control"
          type="text"
          name="cod"
          id="cod"
          placeholder="Escribe código del producto"
          readOnly={currentCode > 0 ? true : false}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Descripción
        </label>
        <input
          onChange={handleChangeInput}
          value={product.description}
          className="form-control"
          type="text"
          name="description"
          id="description"
          placeholder="Describe el producto"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="price">
          Precio
        </label>
        <input
          onChange={handleChangeInput}
          value={product.price}
          className="form-control"
          type="text"
          name="price"
          id="price"
          placeholder="Precio del producto"
        />
      </div>

      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-lg btn-primary" type="submit">
          {currentCode > 0 ? "Actualizar" : "Guardar"}
        </button>
      </div>
    </form>
  );
}

export default Form;
