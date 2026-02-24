import { useState } from 'react';

export const Carrito = ({ carrito, incrementar, disminuir, eliminar, total }) => {
  return (
    <>
      <h2>Carrito</h2>
      {carrito.map((producto, index) => (
        <p key={index}>
          {producto.nombre} x{producto.cantidad} - {producto.precio}
          <button onClick={() => incrementar(producto.id)}>+</button>
          <button onClick={() => disminuir(producto.id)}>-</button>
          <button onClick={() => eliminar(producto.id)}>Borrar</button>
        </p>
      ))}
      <p>Total: ${total}</p>
    </>
  );
};
