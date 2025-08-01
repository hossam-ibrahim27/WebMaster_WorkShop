import { createBrowserRouter, createRoutesFromElements, Route, Routes, } from "react-router";
import ShopPage from "../pages/ShopPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/shop" element={<ShopPage />} />
        </>
    )
);
export default router;