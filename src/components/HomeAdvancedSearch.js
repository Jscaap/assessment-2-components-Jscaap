import React from "react";
import DateInput from "./DateInput"; // adjust the import path

function HomeAdvancedSearch() {
  // style for stay night and bedroom
  const paddingStyle = {
    padding: "20px",
  };

  // map stay night options
  const nightOptions = (
    <div className="form-control-small" style={paddingStyle}>
      <select
        id="search_status"
        name="search_status"
        data-placeholder="Stay..."
        className="form-control"
      >
        <option value="">Stay...</option>
        {/* array map the options */}
        {[...Array(14)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} Night{i > 0 ? "s" : ""}
          </option>
        ))}
      </select>
    </div>
  );

  // map bedroom options
  const bedroomOptions = (
    <div className="form-control-small" style={paddingStyle}>
      <select
        id="search_bedrooms"
        name="search_bedrooms"
        data-placeholder="Bedrooms"
        className="form-control"
      >
        <option value="">Bedrooms</option>
        {/* array map the options */}
        {[0, 1, 2, 3, 4, 5, "5+"].map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );

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
                  <div
                    className="input-group date chzn-container"
                    data-datepicker
                  >
                    <DateInput />
                    <span
                      className="input-group-addon"
                      onClick={() =>
                        document
                          .querySelector('input[type="date"]')
                          ?.showPicker?.()
                      }
                    >
                      <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>

                {/* Nights + Bedrooms */}
                {nightOptions}
                {bedroomOptions}

                {/* Location */}
                <div className="form-control-large">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="City, State, Country, etc..."
                  />
                </div>

                {/* Submit */}
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

export default HomeAdvancedSearch;
