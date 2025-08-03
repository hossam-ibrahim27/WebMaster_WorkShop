import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { db } from "../../components/configure/firebase";
import { collection, addDoc } from "firebase/firestore";
=======
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df

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

<<<<<<< HEAD
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
=======
  const [errors, setErrors] = useState({});
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
<<<<<<< HEAD
    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Invalid phone number";
=======
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Invalid phone number";
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

<<<<<<< HEAD
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
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Form submitted:", formData);
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left w-full flex justify-center">
      <div className="w-full md:w-[90%] lg:w-[85%]">
<<<<<<< HEAD
        {/* 🔗 Login link */}
        <div className="text-sm text-gray-600 text-right mb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </div>

=======
        <br />
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Billing Information</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* First Name */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
=======
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              First Name
            </label>
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
<<<<<<< HEAD
              className={`w-full p-3 border rounded-lg ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
=======
              placeholder="Enter your first name"
              className={`w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
=======
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Last Name
            </label>
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
<<<<<<< HEAD
              className={`w-full p-3 border rounded-lg ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
=======
              placeholder="Enter your last name"
              className={`w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>

          {/* Email */}
<<<<<<< HEAD
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
=======
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Email Address
            </label>
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
<<<<<<< HEAD
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
=======
              placeholder="Enter your email"
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
<<<<<<< HEAD
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"}`}
=======
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
<<<<<<< HEAD
            <label className="block text-gray-700 font-medium mb-2">Address</label>
=======
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Address
            </label>
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
<<<<<<< HEAD
              className={`w-full p-3 border rounded-lg ${errors.address ? "border-red-500" : "border-gray-300"}`}
=======
              placeholder="Street name, building, apartment"
              className={`w-full border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          {/* City */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-700 font-medium mb-2">City</label>
=======
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              City
            </label>
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
<<<<<<< HEAD
              className={`w-full p-3 border rounded-lg ${errors.city ? "border-red-500" : "border-gray-300"}`}
=======
              placeholder="Enter your city"
              className={`w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* ZIP Code */}
          <div>
<<<<<<< HEAD
            <label className="block text-gray-700 font-medium mb-2">ZIP Code</label>
=======
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              ZIP Code
            </label>
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
<<<<<<< HEAD
              className={`w-full p-3 border rounded-lg ${errors.zip ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
          </div>
        </form>

        {/* Payment Method */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>PayPal</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
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
=======
              placeholder="Enter ZIP code"
              className={`w-full border ${errors.zip ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
          </div>
          <br />
        </form>
           <div className="pt-6 mb-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-200 cursor-pointer"
          >
            Continue to Payment
          </button>
        </div>
        <br />
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
      </div>
    </div>
  );
}
