import React from "react";
import PropTypes from "prop-types";

// Functional component for one "Recent Article" card
function ArticleCard({ tagIcon, tagText, date, comments, topics, title, excerpt, imageSrc, href = "#" }) {
  return (
    <div className="item col-md-4">
      {/* Article image area */}
      <div className="image">
        <a href={href}>
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </a>
        <img src={imageSrc} alt={title} />
      </div>

      {/* Tag icon on corner */}
      <div className="tag">
        <i className={tagIcon}></i>
      </div>

      {/* Article content info */}
      <div className="info-blog">
        <ul className="top-info">
          <li><i className="fa fa-calendar"></i> {date}</li>
          <li><i className="fa fa-comments-o"></i> {comments}</li>
          <li><i className="fa fa-tags"></i> {topics}</li>
        </ul>
        <h3>
          <a href={href}>{title}</a>
        </h3>
        <p>{excerpt}</p>
      </div>
    </div>
  );
}

// Prop validation
ArticleCard.propTypes = {
  tagIcon: PropTypes.string.isRequired,   
  tagText: PropTypes.string,              
  date: PropTypes.string.isRequired,      
  comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  topics: PropTypes.string.isRequired,   
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string,
};

// Export ArticleCard
export default ArticleCard;
