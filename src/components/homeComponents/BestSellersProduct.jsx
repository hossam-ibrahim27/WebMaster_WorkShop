// import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/homeComponents/BestSellersProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

const BestSellersProduct = () => {
    const [images, setImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 6;

    useEffect(() => {
        const dataObject = JSON.parse(window.localStorage.getItem("product")); //? Get Data From Local Storage
        if (dataObject && Array.isArray(dataObject)) {
            const productsData = dataObject.slice(0, 31);
            setImages(productsData);
        }
    }, []);

    const handleNext = () => {
        if (startIndex + visibleCount < images.length) {
            setStartIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };

    const visibleItems = images.slice(startIndex, startIndex + visibleCount);

    return (
        <div className="product-tab">
            <div className="carousel-buttons">
                <button onClick={handlePrev} disabled={startIndex === 0}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={handleNext} disabled={startIndex + visibleCount >= images.length}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="product-carousel">
                {visibleItems.map((item) => (
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
                            <div className="btn">
                                <NavLink to="">Add to cart</NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellersProduct;
