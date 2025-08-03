import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import "../../../src/css/homeComponents/Header.css";
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useCart } from "../../store/CartContext"; // adjust the path

const BasketInHeader = () => {
  const [totalPriceInBasket, setTotalPriceInBasket] = useState(0);
  const [countProductInBasket, setCountProductInBasket] = useState(0);
  const navigate = useNavigate();
  const location = useLocation(); // detects route changes

  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateBasketData = () => {
    setCountProductInBasket(totalItems);
    setTotalPriceInBasket(totalPrice.toFixed(2));
  }
  useEffect(() => {
    updateBasketData();
  }, [location]); 
  // re-run every time route changes

  return (
    <div className="padge">
      <div className="user">
        <FontAwesomeIcon icon={faUser} className='fonticon' />
      </div>
      <div className="basket">
        <span>${totalPriceInBasket}</span>
        <div
          className="cursor-pointer"
          onClick={() => {
            updateBasketData(); // refresh basket before navigating
            navigate("/checkout");
          }}
        >
          <FontAwesomeIcon icon={faBagShopping} className='fonticon' />
          <span>{countProductInBasket}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketInHeader;
