import React from "react";
import RegionItem from "./RegionItem"; // Import the reusable region card
import regions from "../data/regions"; // Import dataset

// Section component to render all regions on the Home page
function PopularRegionsSection() {
  return (
    <>
      <h1 className="section-title">Popular Regions</h1>
      <div id="regions">
        {regions.map((region) => (
          <RegionItem key={region.name} {...region} />
        ))}
      </div>
    </>
  );
}

// Export PopularRegionsSection
export default PopularRegionsSection;
