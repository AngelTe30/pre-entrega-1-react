
import CartWidget from './CartWidget';
import './NavBar.css';
import Logo from '../assets/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={Logo} alt="Logo de mi tienda" className="logo" />
                Mi Tienda
            </div>
            <ul className="navbar-menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;