import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection"; // Import NewsSection component

// create NewsPage Component and render header, new section and footer component 
function NewsPage() {
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
            {/* news section component */}
            <NewsSection /> 
          </div>
        </div>
      </div>

        {/* footer component */}
      <Footer />
    </div>
  );
}

// export NewsPage
export default NewsPage;
