import React, { useState } from "react";

function DateInput() {
  const [newDate, setNewDate] = useState("");

  const handleChange = (event) => {
    setNewDate(event.target.value);
  };

  return (
    <input
      type="date"
      className="form-control"
      placeholder="Arrive on..."
      value={newDate}
      onChange={handleChange}
    />
  );
}

export default DateInput;
