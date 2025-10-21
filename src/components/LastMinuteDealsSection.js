import React from "react";
import DealItem from "./DealItem";
import deals from "../data/deals"; // Import dataset

// Sidebar section for displaying last-minute property deals
function LastMinuteDealsSection() {
  return (
    <div className="col-sm-12">
      <h2 className="section-title">Last minute deals</h2>

      {/* Render list of deal items */}
      <ul className="latest-news">
        {deals.map((deal) => (
          <DealItem key={deal.title} {...deal} />
        ))}
      </ul>

      {/* Button to view more deals */}
      <p className="center">
        <a className="btn btn-fullcolor" href="#">
          More deals
        </a>
      </p>
    </div>
  );
}

// Export LastMinuteDealsSection
export default LastMinuteDealsSection;
