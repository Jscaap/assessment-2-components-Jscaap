import React from "react";
// Import all home page components
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import HomeAdvancedSearch from "../components/HomeAdvancedSearch";
import FeaturedPropertiesSection from "../components/FeaturedPropertiesSection";
import PopularRegionsSection from "../components/PopularRegionsSection";
import RecentArticlesSection from "../components/RecentArticlesSection";
import LastMinuteDealsSection from "../components/LastMinuteDealsSection"; 
import ActivitySection from "../components/ActivitySection";               
import Footer from "../components/Footer";                                 


function HomePage() {
  return (
    <div>
      <header id="header">
        {/* header components */}
        <TopBar />
        <NavBar />
      </header>

      <main>
        <Carousel />
        <HomeAdvancedSearch />
        <div className="content">
          <div className="container">
            <div className="row">
              {/* main content components */}
              <div className="main col-sm-8">
                <FeaturedPropertiesSection />
                <PopularRegionsSection />
                <RecentArticlesSection />
              </div>

              {/* sidebar components */}
              <aside className="sidebar col-sm-4">
                <div className="col-sm-12">
                  <LastMinuteDealsSection />
                </div>
                <div className="col-sm-12">
                  <ActivitySection />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

        {/* footer components */}
      <Footer />
    </div>
  );
}

export default HomePage;
