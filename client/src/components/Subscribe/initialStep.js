import React from "react";
import "./../../styles/subscribe.css";

const InitialStepForm = ({
  values,
  handleInputChange,
  handleFormSubmit,
  nextStep
}) => {
  const { name, email, address } = values;

  return (
      <div>
      <h1>Pay Homage</h1>
      <p className="about__vivek-form">Let's join our hands to Actor Padma Shri Vivek's Trees Initiative.
        All you have to do is, plant a tree, take a picture and upload it here.</p>
      <div className="btn-group">
        <a href="https://forms.gle/FXkt8LftB2YJBxzv5"><button className="submit-btn">
          Submit your details
        </button>
        </a>
      </div>
      </div>
  );
};

export default InitialStepForm;
