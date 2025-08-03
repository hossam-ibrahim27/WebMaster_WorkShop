import React, { useState } from "react";

export default function PaymentOptions() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = "Card number must be 16 digits";
    if (!formData.nameOnCard) newErrors.nameOnCard = "Name is required";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) newErrors.expiry = "Use MM/YY format";
    if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("💳 Payment Info:", formData);
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-md min-h-[0] w-full flex justify-center">
      <div className="w-full md:w-[90%] lg:w-[85%] flex flex-col h-full">
        <div>
          <br />
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-left">Payment</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Card Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={`w-full border ${errors.cardNumber ? "border-red-500" : "border-gray-300"} px-4 py-2.5 rounded-lg`}
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
            </div>

            {/* Name on Card */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
                Name on Card
              </label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                className={`w-full border ${errors.nameOnCard ? "border-red-500" : "border-gray-300"} px-4 py-2.5 rounded-lg`}
                placeholder="Your Name"
              />
              {errors.nameOnCard && <p className="text-red-500 text-sm mt-1">{errors.nameOnCard}</p>}
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  className={`w-full border ${errors.expiry ? "border-red-500" : "border-gray-300"} px-4 py-2.5 rounded-lg`}
                  placeholder="MM/YY"
                />
                {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
                  CVV
                </label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className={`w-full border ${errors.cvv ? "border-red-500" : "border-gray-300"} px-4 py-2.5 rounded-lg`}
                  placeholder="•••"
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </form>
        </div>

        {/* Payment Image */}
        <div className="mt-10">
          <img
            src="src/images/checkout/Background.jpg"
            alt="Payment Methods"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Pay Now Button */}
        <div className="pt-6 mb-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            Pay Now
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
