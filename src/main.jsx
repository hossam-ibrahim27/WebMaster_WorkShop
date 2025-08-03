import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/lemonada/400.css";
import "@fontsource/cairo/400.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/400-italic.css";
import "@fontsource/noto-sans-arabic/400.css";
import { CartProvider } from "./store/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider> 
);
