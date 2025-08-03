import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LastPartInFooter = () => {
    return (
        <div className="last-part">
            <div className="conainer">
                <div className="up">
                    <div className="phone">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhoneVolume} className='fonticon' />
                        </div>
                        <div className="content">
                            <p>8 800 555-55</p>
                            <p>Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="download">
                        <div className="title">
                            <h3>Download App on Mobile :</h3>
                            <p>15% discount on your first purchase</p>
                        </div>
                        <div className="apps">
                            <div className="imag-box">
                                <img src="../../../src/images/app_store.png" alt="App Store" width=""
                                    height="" draggable="false" />
                            </div>
                            <div className="imag-box">
                                <img src="../../../src/images/google_play.png" alt="App Store" width=""
                                    height="" draggable="false" />
                            </div>
                        </div>
                        <div className="social">
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebookF} className='fonticon' />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTwitter} className='fonticon' />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faInstagram} className='fonticon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className="right">
                        <p>Copyright August 2025 © All rights reserved by Hossam Ibrahim</p>
                    </div>
                    <div className="left">
                        <div className="links">
                            <div>Privacy Policy</div>
                            <div>Terms and Conditions</div>
                            <div>Cookie</div>
                        </div>
                        <div className="pay">
                            <div className="imag-box">
                                <img src="../../../src/images/pay.png" alt="App Store" width=""
                                    height="" draggable="false" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastPartInFooter;
