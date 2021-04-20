import React, { useState } from "react";
import "./../../styles/subscribe.css";
import InitialStepForm from "./initialStep";
import OTPStepForm from "./otpStep";
import { useConentful } from './contentful';

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

  const { uploadWithoutImage } = useConentful();

  const { phone, otp } = values;

  const nextStep = () => {
    setInitialStep(false);
  };

  const handleFormSubmit = async () => {
    // submit data without image
    // when user just want to submit data and not upload image
    const { name, email, address } = values;
    try {
      let entry = await uploadWithoutImage(name, email, address);
      console.log("contentful-successful",entry)
      alert("Thank you for submiting");
    } catch (error) {
      alert(error)
    }
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
