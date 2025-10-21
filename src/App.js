import React from "react";
import TopBar from "./components/TopBar"; // Import TopBar 
import NavBar from "./components/NavBar"; // Import NavBar 
import Carousel from "./components/Carousel"; // Import Carousel
import HomeAdvancedSearch from "./components/HomeAdvancedSearch"; // Import HomeAdvancedSearch

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
      </main>
    </div>
  );
}

export default App;