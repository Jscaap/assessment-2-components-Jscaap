import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard"; // Import the reusable card component
import featured from "../data/featuredProperties"; // Import the property data array

// functional component for rendering the entire "Featured Properties" section
function FeaturedPropertiesSection() {
  return (
    <>
      {/* Section title */}
      <h1 className="section-title">Featured Properties</h1>

      {/* container for the property cards, class names come from the original HTML theme */}
      {/* this section maps through the property data and displays each property card */}
      <div className="grid-style1 clearfix">
        {featured.map((p) => (
          <FeaturedPropertyCard key={p.title} {...p} />
        ))}
      </div>
    </>
  );
}

// Export the section so it can be imported into App.js or other pages
export default FeaturedPropertiesSection;
