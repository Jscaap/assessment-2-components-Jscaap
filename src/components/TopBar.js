import React from "react";

// create a TopBar Function Component
function TopBar() {
    // return the TopBar (from .html code)
    return (
    <div id="top-bar">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <ul id="top-buttons">
                    <li>
                    <a href="#">
                        <i className="fa fa-sign-in"></i> Login
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="fa fa-pencil-square-o"></i> Register
                    </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                    <div className="language-switcher">
                        <span>
                        <i className="fa fa-globe"></i> English
                        </span>
                        <ul>
                        <li><a href="#">Deutsch</a></li>
                        <li><a href="#">Español</a></li>
                        <li><a href="#">Français</a></li>
                        <li><a href="#">Português</a></li>
                        </ul>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

// Export TopBar so can be Import in App.js
export default TopBar;