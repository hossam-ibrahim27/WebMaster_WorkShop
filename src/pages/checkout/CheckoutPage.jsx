import React, { useState } from "react";
import Header from "../../components/homeComponents/Header";
import Footer from "../../components/homeComponents/Footer";
import CheckoutForm from "../../components/checkoutComponents/CheckoutForm";
import PaymentOptions from "../../components/checkoutComponents/PaymentOptions";
import OrderSummary from "../../components/checkoutComponents/OrderSummary";
import { useAuth } from "../../context/AuthContext";

export default function CheckoutPage() {
  const auth = useAuth();

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg font-bold">
          حدث خطأ في تحميل بيانات المستخدم. تأكد من تهيئة AuthProvider بشكل صحيح.
        </p>
      </div>
    );
  }

  const { user, loading } = auth;
  const [showPayment, setShowPayment] = useState(false);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">جارٍ تحميل البيانات...</p>
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg font-semibold">
          يجب تسجيل الدخول أولًا للدخول إلى صفحة الشيك أوت
        </p>
      </div>
    );

  return (
    <>
      <Header />
        <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Checkout
          </h1>
          <br/>
      <div className="bg-[#f5f5f5] min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* اليسار: الفورم + الدفع */}
            <div className="lg:col-span-2 w-full">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                <CheckoutForm onSuccess={() => setShowPayment(true)} />
              </div>

              {showPayment && (
                <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                  <PaymentOptions />
                </div>
              )}
            </div>

            {/* اليمين: ملخص الطلب */}
            <div className="w-full">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
