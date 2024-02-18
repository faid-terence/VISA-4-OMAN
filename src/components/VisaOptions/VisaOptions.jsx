import React, { useState } from "react";
import "./VIsaOptions.css";
import closeIcon from "../../assets/Close.svg";

export const VisaOptions = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    isOpen && (
      <div className="modal-container">
        <div className="visa-options">
          <div className="head">
            <p>خطوة 1 من 3</p>
            <h3>نوع الفيزا</h3>
            <button className="close-button" onClick={handleClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          <h3 className="options-title">
            لطفاً اختر نوع التأشيرة التي تود الحصول عليها
          </h3>
          <div className="selector">
            <div className="selector1">
              <h2 className="title">تأشيرة سياحية لمدة 10 أيام</h2>
              <p className="para">950 جنيه مصري *</p>
            </div>
            <div className="selector2">
              <h2 className="title">تأشيرة سياحية لمدة 30 يوماً</h2>
              <p className="para">2750 جنيه مصري *</p>
            </div>
          </div>
          <p className="warn">
            عند الدفع عن طريق فودافون كاش هنالك زيادة 1% على رسوم الطلب
          </p>
          <button className="next">Next</button>
        </div>
      </div>
    )
  );
};
