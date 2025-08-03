import React, { useState } from "react";
import Header from "../../components/homeComponents/Header";
import Footer from "../../components/homeComponents/Footer";
import BlogCard from "../../components/blogComponents/BlogCard";
import BlogSidebar from "../../components/blogComponents/BlogSidebar";
import Pagination from "../../components/blogComponents/Pagination";
import blogs from "../../data/blogs";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🡪 قسم المقالات - الشمال */}
          <div className="md:col-span-2 order-2 md:order-1 flex flex-col gap-8">
            <h2 className="text-3xl font-bold mb-10 ">Blog Page</h2>
            {currentBlogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            ))}
            {/* الترقيم بمسافة تحته */}
            <div className="mb-12">
              <Pagination
                blogsPerPage={blogsPerPage}
                totalBlogs={blogs.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>

          {/* 🡪 السايد بار - اليمين */}
          <div className="order-1 md:order-2">
            <br />
            <br />
            <br />
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

