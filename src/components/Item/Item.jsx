import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
    return (
        <div key={product.id} className="producto">
            <img className="imagenProducto" src={product.imagen} alt={product.name} />

            <p className="nombreProducto">{product.nombre}</p>
            <p className="descripcionProducto">{product.descripcion}</p>
            <Link to={`/detail/${product.id}`}>Ver detalles</Link>
        </div>
    );
};

export default Item;
