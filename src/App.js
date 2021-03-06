import React, { useState } from "react";
import AllProducts from "./components/AllProducts";
import Form from "./components/Form";

import { notify } from "./services/notify/index";

const initialState = []

function App() {
  const [allProducts, setAllProducts] = useState(initialState)
  const [currentCode, setCurrentCode] = useState(0)

  const addOrUpdateProduct = (dataProduct) => {
    if(currentCode > 0) {
      const exist = allProducts.find((product) => product.cod === currentCode)
      if(exist) {
        setAllProducts(
          allProducts.map((product) => product.cod === currentCode ? {...exist, description: dataProduct.description, price: dataProduct.price} : product)
        )
        setCurrentCode(0)
        notify("Actualizado correctamente")
      }
    } else {
      setAllProducts([...allProducts, {...dataProduct}])
      notify("Creado correctamente")
    }
  }

  const deleteProduct = (codeProduct) => {
    setAllProducts(allProducts.filter(product => product.cod !== codeProduct))
    notify("Eliminado correctamente.")
  }

  return (
    <section className="container mt-5" style={{height: "100vh"}}>
      <div className="row">
        <Form
          addOrUpdateProduct={addOrUpdateProduct}
          currentCode={currentCode}
          allProducts={allProducts}
        />
        <AllProducts
          allProducts={allProducts}
          deleteProduct={deleteProduct}
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
        />
      </div>
    </section>
  );
}

export default App;
