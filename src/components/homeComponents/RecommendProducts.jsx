import "../../css/homeComponents/RecommendProducts.css"

const RecommendProducts = () => {
    const dataObject = JSON.parse(window.localStorage.getItem("product")) || []; //? Get Data From Local Storege
    const products = Array.from(dataObject).slice(16, 24); //? Convert To Array 
    const Bestproducts = Array.from(dataObject).slice(6, 7);
    return (
        <section>
            <div className="recommandProducts-section">
                <div className="conainer">
                    <div className="bestproduct">
                        {
                            Bestproducts.map((item) => {
                                return (
                                    <div className="item" key={item.id}>
                                        <div className="img-body">
                                            <img src={item.image} alt={`Product ${item.id}`} draggable="false" />
                                        </div>
                                        <div className="title">
                                            <p>{item.title}</p>
                                            <p>{item.stock} items</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="products">
                        {
                            products.map((item) => {
                                return (
                                    <div className="item" key={item.id}>
                                        <div className="img-body">
                                            <img src={item.image} alt={`Product ${item.id}`} draggable="false" />
                                        </div>
                                        <div className="title">
                                            <p>{item.title}</p>
                                            <p>{item.stock} items</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecommendProducts;
