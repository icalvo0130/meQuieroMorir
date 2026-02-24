import { useState } from 'react';
import './App.css';
import { Card } from './componente/Card';
import { Carrito } from './componente/carrito/carrito';

function App() {
  const [carrito, setCarrito] = useState([]);
  const AggCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const incrementar = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuir = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };

  const eliminar = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const total = carrito.reduce((acumulado, item) => {
    const precioLimpio = Number(item.precio.replace('$', '').replace('.', ''));
    return acumulado + precioLimpio * item.cantidad;
  }, 0);

  return (
    <>
      <h1>Tiendita</h1>
      <Card
        nombre="muñeca de rapunzel"
        precio="$50.000"
        id="01"
        image="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fjuguetestoday.com%2Fproduct%2F0192995227309%2F%3Fsrsltid%3DAfmBOoougRg9QgF6-9gj6xJsH2BnLAub-RngipwHTX1onJKeVlyUBaYO&ved=0CBYQjRxqFwoTCLCRzeTy8JIDFQAAAAAdAAAAABA6&opi=89978449"
        AggCarrito={AggCarrito}
      ></Card>
      <Card
        nombre="pascal"
        precio="$30.000"
        id="02"
        image="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.toysrus.es%2FPrincesas-Disney-Mu%25C3%25B1eca-Rapunzel-%252B-Vestido-(4-6-a%25C3%25B1os)%2Fp%2FK1064118&ved=0CBYQjRxqGAoTCKDBuYTY8JIDFQAAAAAdAAAAABCqAQ&opi=89978449"
        AggCarrito={AggCarrito}
      ></Card>
      <Card
        nombre="flynn"
        precio="$40.000"
        id="03"
        image="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.toysrus.es%2FPrincesas-Disney-Mu%25C3%25B1eca-Rapunzel-%252B-Vestido-(4-6-a%25C3%25B1os)%2Fp%2FK1064118&ved=0CBYQjRxqGAoTCKDBuYTY8JIDFQAAAAAdAAAAABCqAQ&opi=89978449"
        AggCarrito={AggCarrito}
      ></Card>
      <Carrito
        carrito={carrito}
        incrementar={incrementar}
        disminuir={disminuir}
        eliminar={eliminar}
        total={total}
      ></Carrito>
    </>
  );
}

export default App;
