import React, { useState } from "react";
import "../App.css";
import SignupInfo from "./SignupInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import ThankYou from "./ThankYou";

const Form = () => {
  const FormTitles = ["Sign Up", "Personal Info", "Other Info", "Thank You"];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    age: "",
  });

  const displayForm = () => {
    if (step === 0) {
      return <SignupInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <ThankYou />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: step === 0 ? "33.3%" : step === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[step]}</h1>
        </div>
        <div className="body">{displayForm()}</div>
        <div className="footer">
          <button
            style={
              step === FormTitles.length - 1
                ? { display: "none" }
                : { display: "block" }
            }
            disabled={step === 0}
            onClick={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            Prev
          </button>
          <button
            style={
              step === FormTitles.length - 1
                ? { display: "none" }
                : { display: "block" }
            }
            onClick={() => {
              if (step === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setStep((currPage) => currPage + 1);
              }
            }}
          >
            {step === FormTitles.length - 2 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
