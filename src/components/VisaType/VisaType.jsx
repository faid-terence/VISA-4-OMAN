import React, { useState } from "react";
import closeIcon from "../../assets/Close.svg";
import "./VisaType.css";
import warnIcon from "../../assets/warn.svg";

export const VisaType = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowPaymentMethods(true); // Show payment methods when an option is selected
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="model-container">
      <div className="visa-types">
        <div className="headings">
          <p>خطوة 1 من 3</p>
          <h3>نوع الفيزا</h3>
          <button className="close-button" onClick={handleClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>

        <h3 className="option-title">
          لطفاً اختر نوع التأشيرة التي تود الحصول عليها
        </h3>
        <div className="select-type">
          <div
            className={`type-1 ${
              selectedOption === "10-days" ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect("10-days")}
          >
            <h2 className="title">تأشيرة سياحية لمدة 10 أيام</h2>
            <p className="para">950 جنيه مصري *</p>
          </div>
          <div
            className={`type-2 ${
              selectedOption === "30-days" ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect("30-days")}
          >
            <h2 className="title">تأشيرة سياحية لمدة 10 أيام</h2>
            <p className="para">950 جنيه مصري *</p>
          </div>
        </div>
        <div
          className={`payment-methods ${showPaymentMethods ? "" : "hidden"}`}
        >
          {" "}
          <label htmlFor="payment" className="payment">
            اختر وسيلة الدفع
          </label>
          <div className="payment-options">
            <input type="radio" id="vodafon1" name="payment" />
            <label htmlFor="vodafon1">فودافون كاش </label>
            <br />
            <input type="radio" id="vodafon2" name="payment" />
            <label htmlFor="vodafon2">بنك QNB</label>
          </div>
        </div>

        <img src={warnIcon} alt="" className="warn-image" />

        <button className="next">NEXT</button>
      </div>
    </div>
  );
};
