import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RegionsSection from "../components/RegionsSection"; // import Regions Section Component

// create RegionsPage Component and render header, new section and footer component 
function RegionsPage() {
  return (
    <div id="wrapper">
      <header id="header">
        {/* header component */}
        <TopBar />
        <NavBar />
      </header>

      <div className="content">
        <div className="container">
          <div className="row">
            {/* regions section component */}
            <RegionsSection />
          </div>
        </div>
      </div>

      {/* footer component */}
      <Footer />
    </div>
  );
}

export default RegionsPage;
