import React from "react";
import "../App.css";

const SignupInfo = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="enter email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="enter password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder=" confirm password"
        value={formData.confirmPassword}
        onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
        }}
      />
    </div>
  );
};

export default SignupInfo;
