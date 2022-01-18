import React from "react";

const CheckoutForm = ({ generateOrder, handleFormChange, emptyCart }) => {
  return (
    <form
      className="orderForm"
      onSubmit={generateOrder}
      onChange={handleFormChange}
    >
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Nombre Completo"
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="phone"
          placeholder="Numero de telefono"
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Correo electronico"
          required
        />
      </div>
      <button onClick={emptyCart} className="btn btn-danger">
        Vaciar Carrito
      </button>
      <button className="btn btn-primary">Generar Orden</button>
    </form>
  );
};

export default CheckoutForm;
