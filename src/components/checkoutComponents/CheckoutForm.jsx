import React, { useState } from "react";

import { Link } from "react-router-dom";
import { db } from "../../components/configure/firebase";
import { collection, addDoc } from "firebase/firestore";


export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });


  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Invalid phone number";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsSubmitting(true);
      const docRef = await addDoc(collection(db, "orders"), {
        ...formData,
        paymentMethod,
        createdAt: new Date(),
      });
      console.log("✅ Order submitted with ID:", docRef.id);
      setSubmitMessage("✅ Order submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
      });
      setPaymentMethod("creditCard");
    } catch (error) {
      console.error("❌ Error submitting order:", error);
      setSubmitMessage("❌ Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);

    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left w-full flex justify-center">
      <div className="w-full md:w-[90%] lg:w-[85%]">

        <div className="text-sm text-gray-600 text-right mb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Billing Information</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={`w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className={`w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className="md:col-span-2">

            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="md:col-span-2">

            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">

            <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street name, building, apartment"
              className={`w-full border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          {/* City */}
          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className={`w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>


          {/* ZIP */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">ZIP Code</label>

            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Enter ZIP code"
              className={`w-full border ${errors.zip ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
          </div>


        </form>

        {/* Payment Method */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-2">
            {["creditCard", "paypal", "cash"].map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>{method === "creditCard" ? "Credit Card" : method === "paypal" ? "PayPal" : "Cash on Delivery"}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6 mb-2">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-200 cursor-pointer ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Place Order"}
          </button>
        </div>

        {/* Message */}
        {submitMessage && (
          <p
            className={`text-center text-sm mt-4 font-medium ${
              submitMessage.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {submitMessage}
          </p>
        )}
       <br/>
      </div>
 
    </div>
  );
}


