// ProductCard.jsx
import { useState } from "react";
import { useCart } from "../../store/CartContext"; // adjust the path as needed
import toast from "react-hot-toast";

export const ProductCard = ({ product, onClick }) => {
  const [quantity, setQuantity] = useState(0);
const { addToCart, removeFromCart } = useCart();
const handleDecrease = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
    removeFromCart(product.id, 1);
    toast("Quantity decreased");
  } else if (quantity === 1) {
    setQuantity(0);
    removeFromCart(product.id);
    toast.error("Product removed from cart");
  }
};

const handleIncrease = () => {
  if (product && quantity < product.stock) {
    setQuantity(quantity + 1);
    addToCart(product, 1); // add 1 unit at a time
    toast.success("Product added to cart");
  }
};

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={`filled-${i}`} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar && stars.length < totalStars) {
      stars.push(<span key="half" className="text-yellow-400">★</span>);
    }

    while (stars.length < totalStars) {
      stars.push(<span key={`empty-${stars.length}`} className="text-gray-300">☆</span>);
    }

    return stars;
  };

  const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100);

  return (
    <div
      className="p-3 sm:p-4 border rounded-md shadow-sm hover:shadow-lg transition cursor-pointer relative flex flex-col"
      onClick={() => onClick?.(product)}
    >
      <div className="absolute top-2 left-2 bg-[#35afa0] text-white text-xs font-bold px-2 py-1 rounded">
        {product.discountPercentage}%
      </div>

      <img
        src={product.image || product.thumbnail}
        alt={product.title}
        className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-md mb-3"
      />

      <div className="flex flex-col justify-between flex-grow">
        <div className="text-left">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-xs text-[#00B853] mt-1">{product.status || "Available"}</p>

          <div className="flex items-center mt-1">
            {renderStars(product.rating)}
            <span className="ml-2 text-xs text-gray-600">
              {product.rating.toFixed(1)} / 5
            </span>
          </div>

          <div className="mt-2">
            <span className="text-gray-500 text-sm line-through mr-1">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-[#D51243] font-bold text-base">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-3 border mx-auto rounded-2xl flex items-center justify-center sm:justify-start">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDecrease();
            }}
            className="px-4 py-1 text-sm bg-[#EDEEF5] text-[#202435] rounded-l-2xl"
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="px-8 py-1 text-sm">{quantity}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrease();
            }}
            className="px-4 py-1 text-sm bg-[#FFCD00] text-[#202435] rounded-r-2xl"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
