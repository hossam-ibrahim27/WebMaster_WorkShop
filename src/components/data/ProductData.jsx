import axios from "axios"
import { useEffect } from "react";
const ProductData = () => {
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                const products = response.data.products.slice(0, 31); //* All Products
                const imgs = products.map(product => ({
                    id: product.id,
                    image: product.images[0],
                    title: product.title,
                    status: product.availabilityStatus,
                    review: product.reviews[2].rating,
                    price: product.price,
                    discountPercentage: product.discountPercentage,
                    rating: product.rating,
                    stock: product.stock,
                    description:product.description,
                    category: product.category,
                    brand: product.brand,
                }));
                window.localStorage.setItem("product", JSON.stringify(imgs));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
}

export default ProductData;
