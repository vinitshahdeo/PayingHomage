import React, { useState } from "react";
import { firebase } from "./../../api/firebase";
import "./../../styles/subscribe.css";
import { useConentful } from './contentful'

const OTPStepForm = ({ handleInputChange, phone, otp, values }) => {
  const [loading, setloading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState();
  const [imageFile, setImageFile] = useState();

  const { uploadContentWithImage } = useConentful();

  // initial recaptcha setup
  const setupRecaptcha = () => {
    try {
      console.log("[CREATING CAPTCHA VERIFIER]");
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function (response) {
            console.log("[CAPTCHA RESOLVED]", response);
            setCaptchaSolved(true);
          },
        }
      );
    } catch (error) {
      console.log("error..:", error);
      setCaptchaSolved(false);
    }
  };

  // on Phone Number Submit / Send OTP
  const sendOTP = async (e) => {
    e.preventDefault();
    console.log("[SENDING PHONE NUMBER]");
    setupRecaptcha();

    console.log("window.recaptchaVerifier", window.recaptchaVerifier);

    const phoneNumber = phone;
    const appVerifier = window.recaptchaVerifier;

    if (appVerifier) {
      try {
        setloading(true);
        const confirmationResultResponse = await firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, appVerifier);
        setConfirmationResult(confirmationResultResponse);
        setloading(false);
      } catch (error) {
        console.log("Error(SMS not sent)..:", error);
        setloading(false);
      }
    }
  };

  // Confirm OTP
  const confirmCode = async (e) => {
    e.preventDefault();
    if (confirmationResult && otp) {
      console.log("confirmationResult..:", confirmationResult);
      console.log("codeConfirmation..:", otp);

      try {
        setloading(true);
        const result = await confirmationResult.confirm(otp);
        console.log("[REGISTRATION SUCCESS]");
        console.log("result", result.user?.uid);

        await handleFormSubmitWithImage();

        setComplete(true);
        setloading(false);
      } catch (error) {
        console.log("error..:", error);
        alert("Invalid OTP");
        setloading(false);
      }
    }
  };

  const handleFormSubmitWithImage = async () => {
    //call this inside confirm code.
    //
    // TODO: Submit form with uploaded Image. All info is stored in state
    //

    try {
      const { name, email, address } = values;
      let res = await uploadContentWithImage(name, email, address, imageFile)
      console.log(res);
    } catch (error) {
      console.log(error);
      throw error
    }

  };

  const handleChangeImage = (event) => {
    setImageFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="step-2">
      <h1>Upload Image</h1>
      {!complete && (
        <form className="phone-form">
          <div id="recaptcha-container"></div>
          <label htmlFor="phone">Enter Phone Number:</label>
          <div className="phone-grp">
            <input
              value={phone}
              onChange={handleInputChange}
              type="text"
              name="phone"
              disabled={!!captchaSolved}
              placeholder="Ex- +918888899999 "
              label="Phone No."
            />

            <button onClick={sendOTP} className="otp-btn">
              {" "}
              Send OTP{" "}
            </button>
          </div>
        </form>
      )}
      {captchaSolved && !complete && (
        <form className="otp-form">
          <input
            value={otp}
            onChange={handleInputChange}
            name="otp"
            type="text"
            label="otp"
            className="otp-input"
            placeholder="OTP"
          />
          {imageFile && (
            <div className="img-container">
              <img
                src={imageFile}
                alt="tree-user-uploaded"
                width="200px"
                className="uploaded-img"
              />
            </div>
          )}
          <input
            onChange={(event) => handleChangeImage(event)}
            id="custom-image-upload"
            type="file"
          />
          <div style={{ display: "flex" }}>
            <button onClick={confirmCode} className="verify-btn">
              Verify & Submit
            </button>
          </div>
        </form>
      )}
      {complete && <h3>Added Successfully</h3>}

      {loading && <div>Loading...</div>}
    </div>
  );
};

export default OTPStepForm;
