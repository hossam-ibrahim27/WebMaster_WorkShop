import { useState, useEffect } from "react";
import article from "../../images/shop/article.png";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left mb-2"
      >
        <h3 className="font-semibold text-[15px] text-[#202435]">{title}</h3>
        {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </button>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  );
}

export default function ProductFilter({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const [dynamicCategories, setDynamicCategories] = useState([]);
  const [dynamicBrands, setDynamicBrands] = useState([]);
  const [availabilityCounts, setAvailabilityCounts] = useState({ inStock: 0, outOfStock: 0 });

  // Load data from localStorage and extract filters
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product")) || [];

    const categories = Array.from(new Set(data.map((product) => product.category)));
    setDynamicCategories(categories);

    const brands = Array.from(
      new Set(data.map((product) => product.brand))
    ).filter(Boolean); // remove null or empty brands
    setDynamicBrands(brands);

    const inStockCount = data.filter(p => p.stock > 0).length;
    const outOfStockCount = data.filter(p => p.stock <= 0).length;
    setAvailabilityCounts({ inStock: inStockCount, outOfStock: outOfStockCount });
  }, []);

  const triggerFilterChange = (updated = {}) => {
    const filterValues = {
      categories: selectedCategories,
      brands: selectedBrands,
      availability,
      price: priceRange,
      ...updated,
    };
    onFilterChange?.(filterValues);
  };

  const toggleSelection = (value, list, setList) => {
    const updated = list.includes(value)
      ? list.filter((v) => v !== value)
      : [...list, value];
    setList(updated);
    triggerFilterChange({
      [list === selectedCategories
        ? "categories"
        : list === selectedBrands
        ? "brands"
        : "availability"]: updated,
    });
  };

  const handlePriceChange = (field, value) => {
    const updated = { ...priceRange, [field]: value };
    setPriceRange(updated);
    triggerFilterChange({ price: updated });
  };

  return (
    <div className="space-y-6 bg-white p-4 shadow-sm rounded-lg w-full md:max-w-xs">
      {/* Categories */}
      <CollapsibleSection title="Product Categories">
        <ul className="space-y-1 text-sm text-[#71778E]">
          {dynamicCategories.map((cat) => (
            <li key={cat}>
              <label className="inline-flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() =>
                      toggleSelection(cat, selectedCategories, setSelectedCategories)
                    }
                  />
                  <span>{cat}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      {/* Brands */}
      <CollapsibleSection title="Brands">
        <ul className="space-y-1 text-sm text-[#71778E]">
          {dynamicBrands.map((brand) => (
            <li key={brand}>
              <label className="inline-flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      toggleSelection(brand, selectedBrands, setSelectedBrands)
                    }
                  />
                  <span>{brand}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      {/* Price */}
      <CollapsibleSection title="Price">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col items-start w-full">
            <span className="text-sm text-[#71778E]">From</span>
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => handlePriceChange("min", e.target.value)}
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="text-sm text-[#71778E]">To</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => handlePriceChange("max", e.target.value)}
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Availability */}
      <CollapsibleSection title="Availability">
        {[
          { label: "In Stock", value: "inStock", count: availabilityCounts.inStock },
          { label: "Out of Stock", value: "outOfStock", count: availabilityCounts.outOfStock }
        ].map((item) => (
          <label
            key={item.value}
            className="inline-flex justify-between items-center w-full text-sm text-[#71778E]"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={availability.includes(item.value)}
                onChange={() => toggleSelection(item.value, availability, setAvailability)}
              />
              <span>{item.label}</span>
            </div>
            <span className="text-xs text-gray-500">({item.count})</span>
          </label>
        ))}
      </CollapsibleSection>

      {/* Promo Banner */}
      <div className="mt-4">
        <img src={article} alt="Promo" className="w-full rounded-xl shadow" />
      </div>
    </div>
  );
}
