import { Link } from 'react-router-dom'
import "./NotFound.css"

function NotFound() {
  return (
    <div className="notFoundContainer">
        <h1>Página no encontrada</h1>
        <Link to="/">
            Volver al Inicio
        </Link>
    </div>
  )
}

export default NotFound
