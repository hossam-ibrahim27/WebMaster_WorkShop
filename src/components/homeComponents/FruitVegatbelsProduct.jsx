import "../../css/homeComponents/BestSellersProduct.css"
import "../../css/homeComponents/FruietVegatableSections.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

const FruitVegatbelsProduct = (props) => {
    const dataObject = JSON.parse(window.localStorage.getItem("product")); //? Get Data From Local Storege
    const products = Array.from(dataObject).slice(5, 13); //? Convert To Array 
    return (
        <div>
            <div className={(props.idex === 1) ? "product-tab fruiet-tab fruiet-tab_2" : "product-tab fruiet-tab"}>
                <div className="right">
                    <div className={(props.idex === 1) ? "img-box img-box_2" : "img-box"} >
                        <div className="content">
                            <h2>Weekly Discounts on</h2>
                            <p className="title">{props.title}</p>
                            <p>Bacola Weekend Discount</p>
                            <span className="btn">
                                <NavLink to="/">
                                    <span>view all</span>
                                </NavLink>
                            </span>
                        </div>
                    </div>
                    <div className="bottom-half">
                        <div className="list">
                            <div className="list-right">
                                <span>Beverages</span>
                                <span>Breads & Bakery</span>
                                <span>Frozen Foods</span>
                                <span>Grocery & Staples</span>
                                <span>Meats & Seafood</span>
                            </div>
                            <div className="list-left">
                                <span>Biscuits & Snacks</span>
                                <span>Breakfast & Dairy</span>
                                <span>Fruits & Vegetables</span>
                                <span>Household Needs</span>
                            </div>
                        </div>
                        <div className="link">
                            <NavLink to="/">
                                <span>view all</span>
                                <FontAwesomeIcon icon={faArrowRight} className='fonticon' />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="product-carousel">
                    {products.map((item) => (
                        <div className="item" key={item.id}>
                            <div className="img-body">
                                <span>{((item.rating / 10) * 100).toFixed(1)}%</span>
                                <img
                                    src={item.image}
                                    alt={`Product ${item.id}`}
                                    draggable="false"
                                />
                            </div>
                            <div className="title">
                                <p className="name">{item.title}</p>
                                <p className="status">{item.status}</p>
                                <p className="review">
                                    {
                                        Array.from({ length: item.review }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className='fonticon' />
                                        ))
                                    }
                                    <span>{item.review} Review</span>
                                </p>
                                <div className="price">
                                    <span className="original-price">{item.price}$</span>
                                    <span>{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}$</span>
                                </div>
                                <div className={(props.idex === 1) ? "btn none" : "btn"}>
                                    <NavLink to="">Add to cart</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FruitVegatbelsProduct;
