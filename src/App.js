import React from "react";
import TopBar from "./components/TopBar"; // Import TopBar 
import NavBar from "./components/NavBar"; // Import NavBar 
import Carousel from "./components/Carousel"; // Import Carousel
import HomeAdvancedSearch from "./components/HomeAdvancedSearch"; // Import HomeAdvancedSearch
import FeaturedPropertiesSection from "./components/FeaturedPropertiesSection"; // Import FeaturedPropertiesSection
import PopularRegionsSection from "./components/PopularRegionsSection"; // Import PopularRegionsSection
import RecentArticlesSection from "./components/RecentArticlesSection"; // Import RecentArticlesSection
import LastMinuteDealsSection from "./components/LastMinuteDealsSection"; // Import LastMinuteDealsSection
import ActivitySection from "./components/ActivitySection"; // Import ActivitySection
import Footer from "./components/Footer"; // Import Footer

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
              {/* MAIN CONTENT */}
              <div className="main col-sm-8">
                <FeaturedPropertiesSection />
                <PopularRegionsSection />
                <RecentArticlesSection />
              </div>

              {/* SIDEBAR */}
              <div className="sidebar col-sm-4">
                <div className="col-sm-12">
                  <LastMinuteDealsSection />
                </div>
                <div className="col-sm-12">
                  <ActivitySection />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </main>
       <Footer />
    </div>
  );
}

export default App;