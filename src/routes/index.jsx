<<<<<<< HEAD
// src/routes/index.jsx
import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";

// Pages
import BlogPage from "../pages/blog/BlogPage";
import CheckoutPage from "../pages/checkout/CheckoutPage"; // ✅ استدعاء صفحة الشيك أوت
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<Navigate to="/blog" />} /> */}
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ إضافة صفحة الشيك أوت */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </>
  )
);

export default router;
=======

// src/routes/index.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// Pages
import BlogPage from "../pages/blog/BlogPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </>
  )
);
export default routes;


>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
