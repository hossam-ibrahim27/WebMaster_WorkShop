import { NavLink } from "react-router";
import "../../css/homeComponents/TallSection1.css"
const TallSection1 = () => {
    return (
        <section>
            <div className="tall-section">
                <div className="conainer">
                    <p>
                        <span>100% Secure delivery</span>
                        <span>without contacting the courier</span>
                    </p>
                    <div className="imag-box">
                        {/* <img src="../../../src/images/tall_2.png" alt="Secure delivery" draggable="false" width="" height="" /> */}
                    </div>
                    <span className="btn">
                        <NavLink to="/">
                            <span>Shop Now</span>
                        </NavLink>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default TallSection1;
