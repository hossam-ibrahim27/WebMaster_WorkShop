import { NavLink } from "react-router";
import "../../css/homeComponents/ThreeImagesSection.css"
const ThreeImagesSection = () => {
    const data = [
        { id: 0, title: "Natural Eggs", descrp: "Eat one every day" },
        { id: 1, title: "Taste the Best", descrp: "Shine the morning" },
        { id: 2, title: "Ditch the Junk", descrp: "Breakfast made better" },
    ]
    return (
        <section>
            <div className="threeImages-section">
                <div className="conainer">
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id} className={
                                    (item.id === 1) ? "img-box img-box_2" : (item.id === 2) ? "img-box img-box_3" : "img-box"
                                }>
                                    <div className="content">
                                        <p>Weekend Discount 40%</p>
                                        <p>{item.title}</p>
                                        <p>{item.descrp}</p>
                                        <span className="btn">
                                            <NavLink to="/">
                                                <span>Shop Now</span>
                                            </NavLink>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default ThreeImagesSection;
