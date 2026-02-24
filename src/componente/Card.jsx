import './Card.css';

export const Card = ({ nombre, image, precio, id, AggCarrito }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <img src={image} alt="" />
      <p>{precio}</p>
      <button onClick={() => AggCarrito({ nombre, precio, id })}>Agregar</button>
      <p>{id}</p>
    </div>
  );
};
