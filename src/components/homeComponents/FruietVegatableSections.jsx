import { NavLink } from "react-router";
import "../../css/homeComponents/BestSellersSection.css"
import "../../css/homeComponents/FruietVegatableSections.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FruitVegatbelsProduct from "./FruitVegatbelsProduct";
const dataSection = [{
    headTitle: "FRUIT & VEGETABLES", description: "The freshest green grocer products are waiting for you.",
    title: "Fruits and Vegetables"
}, {
    headTitle: "Breakfast & Dairy", description: "Do not miss the current offers until the end of month.",
    title: "Breakfast and Dairy"
}]
const FruietVegatableSections = (props) => {
    const index = props.index;
    return (
        <section>
            <div className="products-section fruiet-sections">
                <div className="conainer">
                    <div className="head">
                        <div className="right">
                            <p>{dataSection[index].headTitle}</p>
                            <p>{dataSection[index].description}</p>
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
                        <FruitVegatbelsProduct title={dataSection[index].title} idex={index} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FruietVegatableSections;
