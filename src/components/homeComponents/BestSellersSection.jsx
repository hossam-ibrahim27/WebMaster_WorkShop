import { NavLink } from "react-router";
import "../../css/homeComponents/BestSellersSection.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BestSellersProduct from "./BestSellersProduct";

const BestSellersSection = () => {
    return (
        <section>
            <div className="products-section">
                <div className="conainer">
                    <div className="head">
                        <div className="right">
                            <p>Best Sellers</p>
                            <p>Do not miss the current offers until the end of March.</p>
                        </div>
                        <div className="left">
                            <span>
                                <NavLink to="">
                                    <span>view all</span>
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className='fonticon'
                                    />
                                </NavLink>
                            </span>
                        </div>
                    </div>
                    <div>
                        <BestSellersProduct />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestSellersSection;
