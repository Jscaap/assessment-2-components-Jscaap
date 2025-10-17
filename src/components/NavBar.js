import React from "react";

// create a NavBar Function Component
function NavBar() {
    // return the NavBar (from .html code)
    return (
        <div id="nav-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <a href="index.html" className="nav-logo">
                            <img src="images/logo.png" alt="One Ring Rentals" />
                        </a>

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

                        <nav className="navbar">
                            <button id="nav-mobile-btn">
                                <i className="fa fa-bars"></i>
                            </button>
                            <ul className="nav navbar-nav">
                                <li><a href="index.html">Find a Rental</a></li>
                                <li><a href="#">List your rental</a></li>
                                <li><a href="#">Travel Guides</a></li>
                                <li><a href="regions.html">Regions</a></li>
                                <li><a href="news.html">News</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export NavBar so can be Import in App.js
export default NavBar;
