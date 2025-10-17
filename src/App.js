import React from "react";
import TopBar from "./components/TopBar"; // Import TopBar 
import NavBar from "./components/NavBar"; // Import NavBar 

function App() {
  // return all components
  return (
    <div>
      <header id="header">
        <TopBar /> 
        <NavBar /> 
      </header>
    </div>
  );
}

export default App;