import React from "react";
import TopBar from "./components/TopBar"; // Import TopBar 
import NavBar from "./components/NavBar"; // Import NavBar 
import Carousel from "./components/Carousel"; // Import Carousel

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
      </main>
    </div>
  );
}

export default App;