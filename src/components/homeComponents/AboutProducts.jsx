import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTag, faSprayCanSparkles, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import list from "../data/ListInFooterData"

const AboutProducts = () => {
    const data = [
        { id: 0, title: "Everyday fresh products", icon: faSprayCanSparkles },
        { id: 1, title: "Free delivery for order over $70", icon: faTruckFast },
        { id: 2, title: "Daily Mega Discounts", icon: faTag },
        { id: 3, title: "Best price on the market", icon: faTag },
    ];

    return (
        <div className="about-product">
            <div className="conainer">
                <div className="up">
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id} className="item">
                                    <span>
                                        <FontAwesomeIcon icon={item.icon} className='fonticon' />
                                    </span>
                                    <span className="title">{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="down">
                    {
                        list.map((element) => {
                            return (
                                <div key={element.id} className="item">
                                    <h3>{element.title}</h3>
                                    <div className="nav">
                                        {
                                            element.links.map((link) => {
                                                return (
                                                    <div key={link.id}>{link.title}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutProducts;
