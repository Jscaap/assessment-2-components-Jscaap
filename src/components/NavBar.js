import React from "react";
import { Link } from "react-router-dom"; // import Link for SPA navigation

// NavBar Functional Component
function NavBar() {
  return (
    <div id="nav-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              <img src="/images/logo.png" alt="One Ring Rentals" />
            </Link>

            {/* Search box */}
            <div id="sb-search" className="sb-search">
              <form>
                <input
                  className="sb-search-input"
                  placeholder="Search..."
                  type="text"
                  name="search"
                  id="search"
                />
                <input className="sb-search-submit" type="submit" value="" />
                <i className="fa fa-search sb-icon-search"></i>
              </form>
            </div>

            {/* Navigation menu */}
            <nav className="navbar">
              <button id="nav-mobile-btn">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="nav navbar-nav">
                <li><Link to="/regions">Regions</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// export NavBar
export default NavBar;
