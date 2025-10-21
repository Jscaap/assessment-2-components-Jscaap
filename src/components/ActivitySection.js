// src/components/ActivitySection.js
import React from "react";
import ActivityItem from "./ActivityItem"; // Import the reusable activity item component
import activity from "../data/activity"; // Import the activity data array

function ActivitySection() {
  return (
    <div className="col-sm-12">
      <h2 className="section-title">Activity</h2>
      <ul className="activity">
        {activity.map((a) => (
          <ActivityItem key={a.id} {...a} />
        ))}
      </ul>
    </div>
  );
}

// Export ActivitySection
export default ActivitySection;
