import { Link } from 'react-router-dom'
import PlusUyLogo from '../../assets/plusuy.jpg'
import CartWidget from '../CartWidget/CartWidget.jsx'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <Link to="/">
            <img src={PlusUyLogo} alt="Logo" width={100} />
        </Link>

        <ul className='navItems'>
            <Link to="/category/desarrollo">
                Desarrollo Web
            </Link>
            <Link to="/category/diseño">
                Diseño Web
            </Link>
            <Link to="/category/consultoria">
                Consultorías
            </Link>
        </ul>

        <CartWidget />
    </nav>
  )
}

export default Navbar
