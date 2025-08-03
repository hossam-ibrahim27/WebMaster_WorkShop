{/*//?FontAWESOME*/ }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import "../../../src/css/homeComponents/Header.css"
import { useState } from "react";
const BasketInHeader = () => {
    const [totalPriceInBasket] = useState(0);
    const [countProductInBasket] = useState(0);
    return (
        <div className="padge">
            <div className="user">
                <FontAwesomeIcon icon={faUser} className='fonticon' />
            </div>
            <div className="basket">
                <span>${totalPriceInBasket}</span>
                <div>
                    <FontAwesomeIcon icon={faBagShopping} className='fonticon' />
                    <span>{countProductInBasket}</span>
                </div>
            </div>
        </div>
    );
}

export default BasketInHeader;
