import React, { useState } from "react";
import "./../../styles/subscribe.css";
import InitialStepForm from "./initialStep";
import OTPStepForm from "./otpStep";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  otp: "",
};

const SubscribeForm = () => {
  const [values, setValues] = useState(initialValues);

  const [initialStep, setInitialStep] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const { phone, otp } = values;

  const nextStep = () => {
    setInitialStep(false);
  };

  const handleFormSubmit = () => {
    // submit data without image
    // when user just want to submit data and not upload image
  };

  return (
    <div className="subscribe-form">
      {initialStep ? (
        <InitialStepForm
          values={values}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          nextStep={nextStep}
        />
      ) : (
        <OTPStepForm
          handleInputChange={handleInputChange}
          phone={phone}
          otp={otp}
        />
      )}
    </div>
  );
};

export default SubscribeForm;
