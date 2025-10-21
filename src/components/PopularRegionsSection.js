import React from "react";
import RegionItem from "./RegionItem"; // Import the reusable region card

// static data for the six popular regions (from your original HTML)
const regions = [
  { name: "Rhovanion", imageSrc: "http://placehold.it/194x194" },
  { name: "Eriador", imageSrc: "http://placehold.it/194x194" },
  { name: "Bay of Belfalas", imageSrc: "http://placehold.it/194x194" },
  { name: "Mordor", imageSrc: "http://placehold.it/194x194" },
  { name: "The Southwest", imageSrc: "http://placehold.it/194x194" },
  { name: "Arnor", imageSrc: "http://placehold.it/194x194" },
];

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
