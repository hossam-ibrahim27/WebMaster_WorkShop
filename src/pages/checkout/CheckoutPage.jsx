import React, { useState } from "react";
import Header from "../../components/homeComponents/Header";
import Footer from "../../components/homeComponents/Footer";
import CheckoutForm from "../../components/checkoutComponents/CheckoutForm";
import PaymentOptions from "../../components/checkoutComponents/PaymentOptions";
import OrderSummary from "../../components/checkoutComponents/OrderSummary";
import { useAuth } from "../../context/AuthContext";

export default function CheckoutPage() {
  const { user, loading } = useAuth();
  const [showPayment, setShowPayment] = useState(false); // ✅ الحالة

  if (loading) return <p>جارٍ تحميل البيانات...</p>;
  if (!user) return <p>يجب تسجيل الدخول أولًا للدخول إلى صفحة الشيك أوت</p>;

  return (
    <>
      <Header />
      <div className="bg-[#f5f5f5] min-h-screen py-12 px-4 md:px-12 lg:px-24 text-left">
        <h1 className="text-3xl font-bold mb-10 text-gray-800 text-left">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 w-full">
            {/* ✅ ابعت onSuccess للفورم */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
              <CheckoutForm onSuccess={() => setShowPayment(true)} />
            </div>

            {/* ✅ عرض سكشن الدفع فقط بعد الفورم */}
            {showPayment && (
              <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                <PaymentOptions />
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
