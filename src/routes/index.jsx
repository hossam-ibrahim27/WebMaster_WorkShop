
// src/routes/index.jsx

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// Pages
import BlogPage from "../pages/blog/BlogPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/shop/ShopPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </>
  )
);
export default routes;
