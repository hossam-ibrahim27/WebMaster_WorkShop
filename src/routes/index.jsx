// src/routes/index.jsx
import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";

// Pages
import BlogPage from "../pages/blog/BlogPage";
import CheckoutPage from "../pages/checkout/CheckoutPage"; // ✅ استدعاء صفحة الشيك أوت

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/blog" />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ إضافة صفحة الشيك أوت */}
    </>
  )
);

export default router;
