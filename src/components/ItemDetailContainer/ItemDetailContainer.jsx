import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        const newProduct = respuesta.find((product) => product.id === idProduct);
        setProduct(newProduct);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [idProduct]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;