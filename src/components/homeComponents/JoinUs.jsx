import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/homeComponents/Footer.css"
const JoinUs = () => {
    return (
        <div className="join-section">
            <div className="coniner">
                <div className="content">
                    <p><span>$20 discount</span> for your first order</p>
                    <p>Join our newsletter and get...</p>
                    <p>Join our email subscription now to get updates on promotions and coupons.</p>
                    <div className="input-body">
                        <FontAwesomeIcon icon={faEnvelope} className='fonticon' />
                        <input type="email" placeholder="Your email address" />
                        <span>Subscribe</span>
                    </div>
                </div>
                <div className="imag-box">
                    <img src="../../../src/images/footer.png" alt="footer" draggable="false" />
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
