
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function OrderSummary() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const increaseQty = (id) => {
    const updatedCart = cartProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCartProducts(updatedCart);
    toast.success("Quantity increased");
  };

  const decreaseQty = (id) => {
    const updatedCart = cartProducts
      .map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      )
      .filter((product) => product.quantity > 0);

    setCartProducts(updatedCart);
    toast.success("Quantity decreased");
  };

  const removeFromCart = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    toast.success("Removed from cart");
  };

  const subtotal = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-[700px] min-h-[400px]">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Order Summary
      </h2>

      <div className="space-y-6">

        {cartProducts.map((product) => (

          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div>
                <p className="text-gray-700 font-medium flex items-center">
                  {product.name}

                </p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-gray-700">{product.quantity}</span>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-800 font-semibold text-lg">
              ${(product.price * product.quantity).toFixed(2)}
            </p>
                              <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 text-xl hover:text-red-700 ml-2"
                    title="Remove"
                  >
                    &times;
                  </button>

          </div>
        ))}
      </div>


      <div className="mt-8 space-y-3 text-gray-700">
        <div className="flex justify-between text-lg font-medium">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl text-gray-900 border-t pt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>


      <button
        type="button"
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
      >
        Place Order
      </button>


      <div className="mt-4" /> {/* مسافة بسيطة بعد الزر */}
    </div>
  );
}


