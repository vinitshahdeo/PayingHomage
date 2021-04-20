import React from "react";
import "./../../styles/subscribe.css";

const InitialStepForm = ({
  values,
  handleInputChange,
  handleFormSubmit,
  nextStep,
}) => {
  const { name, email, address } = values;

  return (
    <div  className="step-1">
      <h1>Subscribe Us</h1>

      <input
        value={name}
        onChange={handleInputChange}
        name="name"
        type="text"
        label="name"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={handleInputChange}
        name="email"
        type="email"
        label="email"
        placeholder="Email"
      />
      <textarea
        value={address}
        onChange={handleInputChange}
        name="address"
        type="text"
        label="address"
        placeholder="Address (Optional)"
      />

      <div className="btn-group">
        <button className="upload-btn" onClick={nextStep}>
          Upload Image
        </button>
        <button className="submit-btn" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default InitialStepForm;
