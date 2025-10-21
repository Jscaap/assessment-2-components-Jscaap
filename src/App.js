import React from "react";
import TopBar from "./components/TopBar"; // Import TopBar 
import NavBar from "./components/NavBar"; // Import NavBar 
import Carousel from "./components/Carousel"; // Import Carousel
import HomeAdvancedSearch from "./components/HomeAdvancedSearch"; // Import HomeAdvancedSearch
import FeaturedPropertiesSection from "./components/FeaturedPropertiesSection"; // Import FeaturedPropertiesSection
import PopularRegionsSection from "./components/PopularRegionsSection"; // Import PopularRegionsSection
import RecentArticlesSection from "./components/RecentArticlesSection"; // Import RecentArticlesSection

function App() {
  // return all components
  return (
    <div>
      <header id="header">
        <TopBar />
        <NavBar />
      </header>

      <main>
        <Carousel />
        <HomeAdvancedSearch />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="main col-sm-8">
                <FeaturedPropertiesSection />
                <PopularRegionsSection />
                <RecentArticlesSection />
              </div>
              {/* sidebar goes here later */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;