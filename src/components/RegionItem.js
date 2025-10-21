import React from "react";
import PropTypes from "prop-types"; // For type-checking props

// Functional component for a single Region card
function RegionItem({ name, imageSrc, href = "#" }) {
  return (
    <div className="item">
      <a href={href}>
        <img src={imageSrc} alt={name} />
        <h3>{name}</h3>
      </a>
    </div>
  );
}

// PropTypes to ensure correct data types
RegionItem.propTypes = {
  name: PropTypes.string.isRequired,      
  imageSrc: PropTypes.string.isRequired,   
  href: PropTypes.string,                  
};

// Export RegionItem 
export default RegionItem;
