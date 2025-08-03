import { NavLink } from "react-router";
{/*//?FontAWESOME*/ }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faGripLines, faMugHot, faBreadSlice, faBowlFood }
    from '@fortawesome/free-solid-svg-icons';

import "../../../src/css/homeComponents/Header.css"

const FourthQuarter = () => {
    const classActive = ({ isActive }) => {
        if (isActive) {
            return "link active"
        } else {
            return "link"
        }
    }
    return (
        <div className="fourth-quarter">
            <div className="conainer">
                <div className="categores">
                    <div className="title">
                        <FontAwesomeIcon icon={faGripLines} className='fonticon' />
                        <span>ALL CATEGORIES</span>
                        <FontAwesomeIcon icon={faAngleDown} className='fonticon' />
                    </div>
                    <div>
                        TOTAL 50 PRODUCTS
                    </div>
                </div>
                <nav>
                    <ul className="links">
                        <li><NavLink className={classActive} to="/">
                            Home
                            <FontAwesomeIcon icon={faAngleDown} className='fonticon' />
                        </NavLink></li>
                        <li><NavLink className={classActive} to="/shop">Shop</NavLink></li>
                        <li><NavLink className={classActive} to="/meats">
                            <FontAwesomeIcon icon={faBowlFood} className='fonticon' />
                            Meats & Seafood
                        </NavLink></li>
                        <li><NavLink className={classActive} to="/backery">
                            <FontAwesomeIcon icon={faBreadSlice} className='fonticon' />
                            Bakery
                        </NavLink></li>
                        <li><NavLink className={classActive} to="/beverages">
                            <FontAwesomeIcon icon={faMugHot} className='fonticon' />
                            Beverages
                        </NavLink></li>
                        <li><NavLink className={classActive} to="/conatct">Blog</NavLink></li>
                        <li><NavLink className={classActive} to="/conatct">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default FourthQuarter;
