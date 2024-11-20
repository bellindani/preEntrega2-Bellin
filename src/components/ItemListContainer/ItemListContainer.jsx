import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import getProducts from '../../data/getProducts';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();
  
    useEffect(() => {
      getProducts
        .then((respuesta) => {
          if (idCategory) {
            const filteredProducts = respuesta.filter(
              (producto) => producto.categoria === idCategory
            );
            setProducts(filteredProducts);
          } else {
            setProducts(respuesta);
          }
        })
        .catch((error) => console.error("Error fetching products:", error))
        .finally(() => console.log("Finalizó la promesa"));
    }, [idCategory]);

    return (
        <div className='listContainer'>
            <h1 className='titulo'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer

