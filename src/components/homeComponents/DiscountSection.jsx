import "../../css/homeComponents/DiscountSection.css"
const DiscountSection = () => {
    return (
        <section>
            <div className="discount-section">
                <div className="coniner">
                    <span className="title">Super discount for your <span>first purchase.</span></span>
                    <span className="discount">FREE25BAC</span>
                    <span className="discrp">Use discount code in checkout!</span>
                </div>
            </div>
        </section>
    );
}

export default DiscountSection;
