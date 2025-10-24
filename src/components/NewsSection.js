import React from "react";
import newsItems from "../data/news"; // import data array from news

// create NewsSection component 
function NewsSection() {
  return (
    <div className="main col-sm-12">
      <h1 className="section-title">Latest News</h1>

      <div className="grid-style1 clearfix">
        {newsItems.map((item) => (
          <div key={item.title} className="item col-md-4">
            <div className="image">
              <a href="#">
                <span className="btn btn-default">
                  <i className="fa fa-file-o"></i> Read More
                </span>
              </a>
              <img src={item.imageSrc} alt={item.title} />
            </div>
            <div className="tag">
              <i className="fa fa-file-text"></i>
            </div>
            <div className="info-blog">
              <span className="title">{item.title}</span>
              <span className="text">{item.text}</span>
              <span className="meta">
                <span className="author">
                  <i className="fa fa-user"></i> {item.author}
                </span>
                <span className="date">
                  <i className="fa fa-clock-o"></i> {item.date}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export NewsSection
export default NewsSection;
