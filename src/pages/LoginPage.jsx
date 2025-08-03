import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/configure/firebase";
import Header from "../components/homeComponents/Header";
import Footer from "../components/homeComponents/Footer";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Login successful");
      navigate("/checkout");
    } catch (error) {
      console.error(error.message);
      setFirebaseError("Invalid email or password");
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg w-[70%] h-[65vh] flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Login to Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {/* Email */}
              <div className="text-left">
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
              <div className="text-left">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Firebase Error */}
              {firebaseError && (
                <p className="text-red-600 text-sm text-center">{firebaseError}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-200"
              >
                Log In
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-sm text-gray-600">
              Don’t have an account?{" "}
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={goToSignup}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

