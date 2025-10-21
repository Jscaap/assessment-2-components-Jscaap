// src/components/ActivityItem.js
import React from "react";
import PropTypes from "prop-types";

function ActivityItem({
  avatarSrc,
  avatarAlt = "",
  authorName,
  actionText,         
  targetTitle,        
  targetHref = "#",
  bodyText,            
  timeAgo,            
}) {
  return (
    <li className="col-lg-12">
      <a href={targetHref}>
        <img src={avatarSrc} alt={avatarAlt || authorName} />
      </a>

      <div className="info">
        <h5>
          {authorName} {actionText} <a href={targetHref}>{targetTitle}</a>
        </h5>

        {bodyText ? <p>{bodyText}</p> : null}
        <h6>{timeAgo}</h6>
      </div>
    </li>
  );
}

// Prop validation to ensure correct data types and usage
ActivityItem.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarAlt: PropTypes.string,
  authorName: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  targetTitle: PropTypes.string.isRequired,
  targetHref: PropTypes.string,
  bodyText: PropTypes.string,
  timeAgo: PropTypes.string.isRequired,
};

// Export ActivityItem
export default ActivityItem;
