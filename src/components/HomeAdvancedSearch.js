import React from "react";

// create a HomeAdvancedSearch Function Component
function HomeAdvancedSearch() {
  // return the HomeAdvancedSearch (from .html code)
  return (
    <div id="home-advanced-search" className="open">
      <div id="opensearch"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                {/* Arrival Date */}
                <div className="form-control-small">
                  <div className="input-group date chzn-container" data-datepicker>
                    <input
                      placeholder="Arrive on..."
                      type="text"
                      className="form-control"
                      data-date-format="DD/MM/YYYY"
                    />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>

                {/* Nights */}
                <div className="form-control-small">
                  <select
                    id="search_status"
                    name="search_status"
                    data-placeholder="Stay..."
                  >
                    <option value="">Stay...</option>
                    {[...Array(14)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Night{i > 0 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="form-control-small">
                  <select
                    id="search_bedrooms"
                    name="search_bedrooms"
                    data-placeholder="Bedrooms"
                  >
                    <option value="">Bedrooms</option>
                    {[0, 1, 2, 3, 4, 5, "5+"].map((val, i) => (
                      <option key={i} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="form-control-large">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="City, State, Country, etc..."
                  />
                </div>

                <button type="submit" className="btn btn-fullcolor">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export HomeAdvancedSearch so can be Import in App.js
export default HomeAdvancedSearch;
