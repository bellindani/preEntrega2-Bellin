import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
    return (
      <div className="productoContainer">
        <h1 className="productoTitulo">{product.nombre}</h1>
        <img className="productoImg" src={product.imagen} alt={product.nombre} />
        <p className="productoDescrip">{product.descripcion}</p>
        <p className="productoPrecio">{`Precio $${product.precio}`}</p>
      </div>
    );
  };
  
  export default ItemDetail;
