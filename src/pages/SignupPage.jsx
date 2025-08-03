import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/configure/firebase"; // عدل المسار لو غير كده
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from "../components/homeComponents/Header";
import Footer from "../components/homeComponents/Footer";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setFirebaseError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      navigate("/login");
    } catch (error) {
      setFirebaseError(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg w-[90%] max-w-4xl h-[85vh] flex flex-col items-center justify-center">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {firebaseError && (
                <p className="text-red-600 text-sm text-center">{firebaseError}</p>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-200"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

