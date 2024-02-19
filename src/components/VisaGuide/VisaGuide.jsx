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
        <main className="model-container">
          <div className="guide-container">
            <div className="headings">
              <p>خطوة 1 من 3</p>
              <h3>هل أنت جاهز ؟</h3>
              <button className="close-button" onClick={handleClose}>
                <img src={closeIcon} alt="Close" />
              </button>
            </div>
            <div className="guide">
              <h4>سنرشدك خطوة بخطوة للحصول على التأشيرة الخاصة بك</h4>
              <h4>
                الرجاء القيام بتسديد المبلغ المطلوب (950 جنيه مصري) إلى رقم
                الحساب <span>1130482599312</span> بنك qnb باسم{" "}
                <span>abdelfatah mohamed</span> والاحتفاظ برسالة تأكيد الدفع
                لتقوم بتحميلها في الخطوة التالية
              </h4>
              <h4>صورة عن البطاقة الشخصية من الجهتين</h4>
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
