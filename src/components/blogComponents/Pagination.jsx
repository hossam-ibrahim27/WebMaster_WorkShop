import React from "react";

export default function Pagination({ totalBlogs, blogsPerPage, currentPage, paginate }) {
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-12">
      {/* زر السابق */}
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-50 border"
        >
          &lt;
        </button>
      )}

      {/* أرقام الصفحات */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`w-10 h-10 rounded-md flex items-center justify-center font-medium text-base
            ${number === currentPage
              ? "bg-[#3BB77E] text-white"
              : "bg-white text-gray-700 hover:bg-gray-50 border"}`}
        >
          {number}
        </button>
      ))}

      {/* السهم الإضافي بعد آخر رقم */}
      {currentPage === 1 && totalPages > 2 && (
        <span className="text-gray-500 text-lg font-bold px-2">&gt;</span>
      )}

      {/* زر التالي */}
      {currentPage < totalPages && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-50 border"
        >
          &gt;
        </button>
      )}
        <br/><br/><br/>
    </div>
  ); 
}

