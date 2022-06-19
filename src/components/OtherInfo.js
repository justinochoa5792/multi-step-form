import React from "react";
import "../App.css";

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Age..."
        value={formData.age}
        onChange={(e) => {
          setFormData({ ...formData, age: e.target.value });
        }}
      />
    </div>
  );
};

export default OtherInfo;
