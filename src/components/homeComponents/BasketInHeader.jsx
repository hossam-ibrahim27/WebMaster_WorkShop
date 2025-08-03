import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "../../../src/css/homeComponents/Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const BasketInHeader = () => {
  const [totalPriceInBasket] = useState(0);
  const [countProductInBasket] = useState(0);
  const navigate = useNavigate(); 

  return (
    <div className="padge">
      <div className="user cursor-pointer" onClick={() => navigate("/signup")}> 
        <FontAwesomeIcon icon={faUser} className="fonticon" />
      </div>

      <div className="basket">
        <span>${totalPriceInBasket}</span>
        <div
          className="cursor-pointer"
          onClick={() => navigate("/checkout")}
        >
          <FontAwesomeIcon icon={faBagShopping} className="fonticon" />
          <span>{countProductInBasket}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketInHeader;
