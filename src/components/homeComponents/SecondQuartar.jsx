{/*//?FontAWESOME*/ }
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles, faAngleDown} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router";
import "../../../src/css/homeComponents/Header.css"

const SecondQuartar = () => {
    return (
        <div className="second-Quartor">
            <div className="conainer">
                <div className="left-links">
                    <NavLink to="/">About Us</NavLink>
                    <NavLink to="/">Compare</NavLink>
                    <NavLink to="/">Wishlist</NavLink>
                </div> {/*//? end_left-links*/}
                <div className="right-conent">
                    <div>
                        <FontAwesomeIcon icon={faHandSparkles} className='fonticon' />
                        100% Secure delivery without contacting the courier
                    </div>
                    <div>
                        Need help? Call Us:<span>+ 0020 500</span>
                    </div>
                    <div>
                        <span>
                            English
                            <FontAwesomeIcon icon={faAngleDown} className='fonticon' />
                        </span>
                        <span>
                            USD
                            <FontAwesomeIcon icon={faAngleDown} className='fonticon' />
                        </span>
                    </div>
                </div> {/*//? end_right-conent*/}
            </div>  {/*//? end_conainer*/}
        </div> //? second-Quartor 
    );
}

export default SecondQuartar;
