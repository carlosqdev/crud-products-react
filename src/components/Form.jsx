import React from 'react';

function Form() {
  return (
    <>
      <h1 className='text-center mt-2'>CRUD</h1>
      <form className='col-md-4'>
        <div className="form-group">
          <label className="form-label" htmlFor="cod">Codigo</label>
          <input className="form-control" type="text" name="cod" id="cod" placeholder='Escribe código del producto'/>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">Descripción</label>
          <input className="form-control" type="text" name="description" id="description" placeholder='Describe el producto' />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="price">Precio</label>
          <input className="form-control" type="text" name="price" id="price" placeholder='Precio del producto' />
        </div>

        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-lg btn-primary" type="submit">Guardar</button>
        </div>
      </form>
    </>
  );
}

export default Form;
