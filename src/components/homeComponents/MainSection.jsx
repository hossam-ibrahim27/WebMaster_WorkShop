import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import "../../css/homeComponents/MainSection.css"

const MainSection = () => {
    return (
        <section>
            <div className="main-section">
                <div className="conainer">
                    <div className="up-half">
                        <div className="imag_1">
                            <div className="content">
                                <h2>Exclusive Offer<span>-20% Off</span></h2>
                                <p>Feed your family the best</p>
                                <span className="title">Only this week. Don’t miss...</span>
                                <span>from<span>$7.99</span></span>
                                <span className="btn">
                                    <NavLink to="/">
                                        <span>Shop Now</span>
                                        <FontAwesomeIcon icon={faArrowRight} className='fonticon' />
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                        <div className="imag_1 imag_2">
                            <div className="content">
                                <h2>Exclusive Offer<span>-20% Off</span></h2>
                                <p>Gerthesim Tend Inder Prosur</p>
                                <span className="title">Only this week. Don’t miss...</span>
                                <span>from<span>$6.45</span></span>
                                <span className="btn">
                                    <NavLink to="/">
                                        <span>Shop Now</span>
                                        <FontAwesomeIcon icon={faArrowRight} className='fonticon' />
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-half">
                        <div className="imag_1">
                            <div className="content">
                                <p>Everything is so fresh</p>
                                <p>only in Bacola</p>
                                <p>Bacola Weekend Discount</p>
                                <span className="btn">
                                    <NavLink to="/">
                                        <span>Shop Now</span>
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                        <div className="imag_2 imag_1">
                            <div className="content">
                                <p>Big discount on</p>
                                <p>organic legumes</p>
                                <p>Bacola Weekend Discount</p>
                                <span className="btn">
                                    <NavLink to="/">
                                        <span>Shop Now</span>
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSection;
