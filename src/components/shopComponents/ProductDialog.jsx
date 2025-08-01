import {
  faHeart,
  faMinus,
  faPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export const ProductDialog = ({
  product,
  isOpen,
  onClose,
  onProductClick,
  relatedProductsData = [],
}) => {
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product?.thumbnail) setMainImage(product.thumbnail);
  }, [product]);

  if (!isOpen || !product) return null;

  const sizes = ["Small", "Medium", "Large"];
  const tags = product.tags || ["Organic", "Fresh", "Vegan"];
  const relatedProducts = relatedProductsData.slice(0, 5);

  const handleSizeSelect = (size) => setSelectedSize(size);
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-5xl max-h-[95vh] overflow-y-auto text-left">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Images */}
          <div className="w-full md:w-1/2">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[product.thumbnail, ...(product.images || [])].map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`img-${index}`}
                    onClick={() => setMainImage(image)}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                      mainImage === image
                        ? "border-green-600"
                        : "border-gray-200"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h2>

            {/* Pricing */}
            <div className="mb-3">
              <span className="text-gray-500 line-through mr-2">
                ${product.price?.toFixed(2)}
              </span>
              <span className="text-green-600 font-bold text-lg">
                ${product.discountedPrice?.toFixed(2)}
              </span>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="font-semibold mb-1">Available Sizes:</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`px-3 py-1 rounded border text-sm ${
                      selectedSize === size
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4 w-full py-2 bg-[#E5E7EB] rounded flex items-center justify-center space-x-4">
              <button
                onClick={decreaseQty}
                className="w-8 h-8 border rounded text-xl text-gray-800"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="px-2 text-xl">{quantity}</span>
              <button
                onClick={increaseQty}
                className="w-8 h-8 border rounded text-xl text-gray-800"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex flex-col gap-2">
              <button className="w-full bg-[#35afa0] text-white py-2 rounded hover:bg-[#2c8b7a] text-sm sm:text-base">
                Add to Cart
              </button>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <button className="flex-1 border border-gray-300 text-[#202435] py-2 rounded hover:bg-gray-100 text-sm sm:text-base">
                  <FontAwesomeIcon icon={faHeart} className="mr-1" />
                  Wishlist
                </button>
                <button className="flex-1 border border-gray-300 text-[#202435] py-2 rounded hover:bg-gray-100 text-sm sm:text-base">
                  <FontAwesomeIcon icon={faShare} className="mr-1" />
                  Share
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-600 mb-1">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-2 py-1 border rounded text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-1">
                Product Details:
              </h4>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Related Products:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {relatedProducts.map((related, idx) => (
                <div
                  key={idx}
                  onClick={() => onProductClick(related)}
                  className="p-2 cursor-pointer hover:shadow-md transition bg-white border rounded"
                >
                  <img
                    src={related.thumbnail}
                    alt={related.title}
                    className="w-full h-28 object-cover rounded"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    ${related.discountedPrice?.toFixed(2)}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800 line-clamp-2">
                    {related.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
