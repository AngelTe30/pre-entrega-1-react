import './CartWidget.css'; 
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart className='cart-icon'/>
            <span className="cart-count">5</span>
        </div>
    );
};

export default CartWidget;