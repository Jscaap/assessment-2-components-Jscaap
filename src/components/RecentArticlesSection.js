import React from "react";
import ArticleCard from "./ArticleCard"; // Reusable article card component
import articles from "../data/articles"; // Import dataset

// Functional component to render the "Recent Articles" section
function RecentArticlesSection() {
  return (
    <>
      <h1 className="section-title">Recent Articles</h1>

      {/* Loop through each article and render an ArticleCard */}
      <div className="grid-style1">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      {/* "View All" button */}
      <div className="center">
        <a href="#" className="btn btn-default-color">
          View All News
        </a>
      </div>
    </>
  );
}

// Export RecentArticlesSection
export default RecentArticlesSection;
