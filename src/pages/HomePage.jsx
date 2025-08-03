import ProductData from "../components/data/ProductData";
import BestSellersSection from "../components/homeComponents/BestSellersSection";
import DiscountSection from "../components/homeComponents/DiscountSection";
import Footer from "../components/homeComponents/Footer";
import FruietVegatableSections from "../components/homeComponents/FruietVegatableSections";
import Header from "../components/homeComponents/Header";
import MainSection from "../components/homeComponents/MainSection";
import RecommendProducts from "../components/homeComponents/RecommendProducts";
import TallSection1 from "../components/homeComponents/TallSection1";
import ThreeImagesSection from "../components/homeComponents/threeImagesSection";

const HomePage = () => {
    return (
        <>
            <ProductData /> {/*//? No Section Just Store In LocalStorege.*/}
            <Header />
            <MainSection />
            <BestSellersSection />
            <TallSection1 />
            <FruietVegatableSections index={0} />
            <DiscountSection />
            <FruietVegatableSections index={1} />
            <ThreeImagesSection />
            <RecommendProducts />
            <Footer />
        </>
    );
}

export default HomePage;
