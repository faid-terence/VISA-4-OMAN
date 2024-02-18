import React, { useState } from "react";
import closeIcon from "../../assets/Close.svg";
import "./VisaGuide.css";
import { UploadComponent } from "../Upload/UploadComponent";

export const VisaGuide = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showUpload, setShowUpload] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleNext = () => {
    setShowUpload(true);
  };

  return (
    <>
      {isOpen && !showUpload && (
        <main className="modal-container">
          <div className="guide-container">
            <div className="head">
              <p>خطوة 1 من 3</p>
              <h3>نوع الفيزا</h3>
              <button className="close-button" onClick={handleClose}>
                <img src={closeIcon} alt="Close" />
              </button>
            </div>
            <div className="guide">
              <h4>سنرشدك خطوة بخطوة للحصول على التأشيرة الخاصة بك</h4>
              <h4>
                الرجاء القيام بتسديد المبلغ المطلوب (959.5 جنيه مصري) إلى رقم
                فودافون كاش+201070871896 والاحتفاظ برسالة تأكيد الدفع لتقوم
                بتحميلها في الخطوة التالية
              </h4>
              <h4>صورة عن البطاقة الشخصية من الجهتين </h4>
              <h4>صورة عن جواز السفر</h4>
            </div>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </main>
      )}
      {showUpload && <UploadComponent />}
    </>
  );
};
