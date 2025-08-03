import { useEffect, useState } from "react";
import ProductFilter from "../../components/shopComponents/Filters.jsx";
import Breadcrumb from "../../components/Ui/Breadcrumb";
import shop from "../../images/shop/shopImage.png";

import { ProductCard } from "../../components/shopComponents/ProductCard.jsx";
import { ProductDialog } from "../../components/shopComponents/ProductDialog.jsx";
import Header from "../../components/homeComponents/Header.jsx";
import Footer from "../../components/homeComponents/Footer.jsx";
// ShopPage Component
export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);

  const sortProducts = (products, option) => {
    switch (option) {
      case "lowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "highToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "az":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "za":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };

  // Pagination state (showing 12 products per page)
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const filteredProducts = products.filter((product) => {
    // Basic filter structure (extend as needed)
    const matchesCategory =
      !filters.categories ||
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);
    const matchesBrand =
      !filters.brands ||
      filters.brands.length === 0 ||
      filters.brands.includes(product.brand);
    const inPriceRange =
      (!filters.minPrice || product.discountedPrice >= filters.minPrice) &&
      (!filters.maxPrice || product.discountedPrice <= filters.maxPrice);
    const matchesAvailability =
      !filters.availability ||
      filters.availability.length === 0 ||
      filters.availability.includes(product.availabilityStatus);

    return (
      matchesCategory && matchesBrand && inPriceRange && matchesAvailability
    );
  });

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  useEffect(() => {
    const dataObject = JSON.parse(localStorage.getItem("product")) || [];
    const sliced = dataObject.slice(0, 30); // Products from index 1 to 23
    setProducts(sliced);
  }, []);

  if (!products.length)
    return <div className="text-center py-10">Loading products...</div>;
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 md:px-8">
        <div className="pt-4">
          <Breadcrumb page="PRODUCTS" />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4">
            <ProductFilter onFilterChange={setFilters} />
          </aside>

          {/* Products Section */}
          <main className="w-full md:w-3/4">
            {/* Banner */}
            <div className="mb-4 relative">
              <img
                src={shop}
                alt="Shop Banner"
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow"
              />
              <div className="absolute inset-0 flex justify-center  items-center">
                <div className="text-[#202435] px-4 leading-snug text-center md:text-left">
                  <h4 className="text-[18px] md:text-[24px] font-light mb-1">
                    Organic Meals Prepared
                  </h4>
                  <h3 className="text-[22px] md:text-[30px] font-semibold mb-1">
                    Delivered to{" "}
                    <span className="text-[#00B853]">your Home</span>
                  </h3>
                  <p className="text-[12px] font-normal text-[#9B9BB4]">
                    Fully prepared & delivered nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Sort & Product Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start max-sm:items-center bg-[#F7F8FD] p-3 rounded mb-4 gap-2">
              <p className="text-sm text-gray-600">
                Showing {paginatedProducts.length} of {products.length} products
              </p>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value="default">Sort by: Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="az">Alphabetically A-Z</option>
                <option value="za">Alphabetically Z-A</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mb-6">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  onClick={openDialog}
                  product={product}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border  rounded-full text-sm ${
                      currentPage === page
                        ? "bg-[#35afa0]"
                        : "hover:bg-[#2c8b7a]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3 py-1 text-sm hover:bg-gray-100"
                >
                  &gt;
                </button>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Product Dialog */}
      <ProductDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={closeDialog}
        relatedProductsData={products.filter(
          (p) => p.id !== selectedProduct?.id
        )}
        onProductClick={openDialog}
      />
      <Footer />
    </>
  );
}
