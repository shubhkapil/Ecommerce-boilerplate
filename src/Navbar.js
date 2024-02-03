import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <h1>E-commerce</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <img src="grocery-cart-icon-7502.png" alt="Cart" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;