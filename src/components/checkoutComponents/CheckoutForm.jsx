import React, { useState } from "react";

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

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Form submitted:", formData);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left w-full flex justify-center">
      <div className="w-full md:w-[90%] lg:w-[85%]">
        <br />
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Billing Information</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              First Name
            </label>
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
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Last Name
            </label>
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
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Email Address
            </label>
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
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              Address
            </label>
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
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              City
            </label>
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

          {/* ZIP Code */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
              ZIP Code
            </label>
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
      </div>
    </div>
  );
}
