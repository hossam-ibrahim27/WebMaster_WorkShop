import React from 'react';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import './Header.css';

function Header() {
  return (
    <header className="header">
    
      <div className="header-top">
        <div className="header-logo">
                       <h5 className="fw-bold mb-3"><span style={{ color: 'green' }}>Ba</span>sket</h5>

          <div>
          
            <small>Online Grocery Shopping Center</small>
          </div>
        </div>

        <div className="header-search">
          <input type="text" placeholder="Search for Products, fruit, meat, etc..." />
          <button><FiSearch /></button>
        </div>

        <div className="header-icons">
          <div className="icon"><FiUser /></div>
          <div className="icon">
            <FiShoppingBag />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul className="nav-list">
          <li><a href="#">Home</a></li>

          <li className="dropdown">
            <a href="#">Shop ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#">Meats & Seafood ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Meats</a></li>
              <li><a href="#">Seafood</a></li>
            </ul>
          </li>

          <li><a href="#">Bakery</a></li>
          <li><a href="#">Beverages</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

