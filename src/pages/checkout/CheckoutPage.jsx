import React from "react";
import CheckoutForm from "../../components/checkoutComponents/CheckoutForm";
import PaymentOptions from "../../components/checkoutComponents/PaymentOptions";
import OrderSummary from "../../components/checkoutComponents/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-12 px-4 md:px-12 lg:px-24 text-left">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-10 text-gray-800 text-left">
        Checkout
      </h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Side: Form + Payment */}
        <div className="lg:col-span-2 w-full">
          {/* Checkout Form Card */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
            <CheckoutForm />
          </div>
<br/>
          {/* Payment Options Card */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
            <PaymentOptions />
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
