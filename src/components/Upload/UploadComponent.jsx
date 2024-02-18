import React, { useState } from "react";
import closeIcon from "../../assets/Close.svg";
import "./Upload.css";

export const UploadComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };
  return (
    isOpen && (
      <div className="modal-container">
        <div className="uploading">
          <div className="head">
            <p>خطوة 2 من 3</p>
            <h3>نوع الفيزا</h3>
            <button className="close-button" onClick={handleClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          <div className="upload">
            <h4>قم بتحميل الملفات المطلوبة لمعالجة طلبك</h4>
            <button className="upload-btn">Upload</button>
          </div>
          <button className="next-upload">Next</button>
        </div>
      </div>
    )
  );
};
