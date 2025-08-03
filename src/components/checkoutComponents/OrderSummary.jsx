import React from "react";

const products = [
  {
    id: 1,
    name: "All Natural Italian-Style Chicken Meatballs ",
    image: "src/images/checkout/container.jpg",
    price: 25.0,
  },
  {
    id: 2,
    name: "Coca-Cola _ 2L Bottle ",
    image: "src/images/checkout/cell.jpg",
    price: 55.0,
  },
  {
    id: 3,
    name: "FairLife Lactose-free 2% Milk ",
    image: "src/images/checkout/cell2.jpg",
    price: 20.0,
  },
];

export default function OrderSummary() {
  const subtotal = products.reduce((acc, item) => acc + item.price, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-[700px] min-h-[400px]">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Order Summary
      </h2>

      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <p className="text-gray-700 font-medium">{product.name}</p>
            </div>
            <p className="text-gray-800 font-semibold text-lg">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
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

      {/* Button with space below */}
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

