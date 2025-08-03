{/*//?FontAWESOME*/ }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGripLines, faClose } from '@fortawesome/free-solid-svg-icons';

import "../../../src/css/homeComponents/Header.css"
import { useState } from "react";
import FourthQuarter from "./FourthQuarter";
import BasketInHeader from "./BasketInHeader";
const ThirdQuarter = () => {
    const [navLink, setnavLink] = useState(false);

    return (
        <div className="third-quarter">
            <div className="conainer">
                <div className="logo">
                    <div>
                        <div className="img-box">
                            <img src="../../../src/images/1.png" alt="Logo" width="" height="" draggable="false" />
                        </div>
                        <div>Basket</div>
                    </div>
                    <span>Online Grocery Shopping Center</span>
                </div> {/*//? end-logo */}
                <div className="search">
                    <input type="search" name="search" placeholder="Search For Product, fruit, meat, eggs, etc...." />
                    <FontAwesomeIcon icon={faSearch} className='fonticon' />
                </div>  {/*//? end-search */}
                <BasketInHeader />
                <div className="responsive-nav">
                    <div className="collabseButton">
                        <FontAwesomeIcon icon={faGripLines} className='fonticon' onClick={() => {
                            setnavLink(!navLink);
                        }} />
                    </div>
                    {
                        (navLink) ?
                            <div className="nav">
                                <FontAwesomeIcon icon={faClose} className='fonticonclose' onClick={() => {
                                    setnavLink(!navLink);
                                }} />
                                <FourthQuarter />
                                <BasketInHeader />
                            </div>
                            : ""
                    }
                </div>
            </div>{/*//? end-container */}
        </div> //? end-third-quarter
    );
}

export default ThirdQuarter;
