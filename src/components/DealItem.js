import React from "react";
import PropTypes from "prop-types";

// Functional component for a single "Last Minute Deal" item
function DealItem({ title, location, availability, imageSrc, href = "#" }) {
  return (
    <li className="col-md-12">
      {/* Image thumbnail */}
      <div className="image">
        <a href={href}></a>
        <img alt={title} src={imageSrc} />
      </div>

      {/* Availability info */}
      <ul className="top-info">
        <li>
          <i className="fa fa-calendar"></i> {availability}
        </li>
      </ul>

      {/* Deal title and location */}
      <h4>
        <a href={href}>{title}</a>
        <p>{location}</p>
      </h4>
    </li>
  );
}

// Prop validation for safety and documentation
DealItem.propTypes = {
  title: PropTypes.string.isRequired,       
  location: PropTypes.string.isRequired,     
  availability: PropTypes.string.isRequired, 
  imageSrc: PropTypes.string.isRequired,     
  href: PropTypes.string,                    
};

export default DealItem;
