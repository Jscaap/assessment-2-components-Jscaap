import React from "react";
import australiaRegions from "../data/australiaRegions"; // import australiaRegions data

// create RegionSection Component
function RegionsSection() {
  return (
    <div className="main col-sm-12">
      <h1 className="section-title">Regions in Australia</h1>

      <div className="grid-style1 clearfix">
        {australiaRegions.map((region) => (
          <div key={region.name} className="item col-md-4">
            <div className="image">
              <a href={region.href}>
                <h3>{region.name}</h3>
                <span className="location">{region.state}</span>
              </a>
              <img src={region.imageSrc} alt={region.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//export RegionDSection 
export default RegionsSection;
