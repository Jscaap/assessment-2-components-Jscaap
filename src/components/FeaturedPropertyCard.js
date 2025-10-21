import React from "react";
import PropTypes from "prop-types"; // used for type-checking component props

// functional component for rendering a single Featured Property card
function FeaturedPropertyCard({
  title,
  location,
  imageSrc,
  price,
  priceUnit = "per night",           
  href = "properties-detail.html",   
  bedrooms,
  bathrooms,
  className = "item col-md-4",       
}) {
  return (
    <div className={className}>
      {/* Property image and title area */}
      <div className="image">
        <a href={href}>
          <h3>{title}</h3>
          <span className="location">{location}</span>
        </a>
        <img src={imageSrc} alt={title} />
      </div>

      {/* Price section */}
      <div className="price">
        <span>{price}</span>
        <p>{priceUnit}</p>
      </div>

      {/* Amenities list (bedrooms and bathrooms) */}
      <ul className="amenities">
        <li><i className="icon-bedrooms"></i> {bedrooms}</li>
        <li><i className="icon-bathrooms"></i> {bathrooms}</li>
      </ul>
    </div>
  );
}

// propTypes help catch bugs by ensuring the right data types are passed
FeaturedPropertyCard.propTypes = {
  title: PropTypes.string.isRequired,      
  location: PropTypes.string.isRequired,   
  imageSrc: PropTypes.string.isRequired,   
  price: PropTypes.string.isRequired,      
  priceUnit: PropTypes.string,             
  href: PropTypes.string,                 
  bedrooms: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,                           
  bathrooms: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  className: PropTypes.string,             
};

// Export FeaturedPropertyCard so can be Import in App.js
export default FeaturedPropertyCard;
