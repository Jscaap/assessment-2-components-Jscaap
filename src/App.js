import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import router
// Import pages
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import RegionsPage from "./pages/RegionsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      {/* define routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
