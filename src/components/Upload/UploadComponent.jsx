import React, { useState } from "react";
import closeIcon from "../../assets/Close.svg";
import "./Upload.css";
import useDrivePicker from "react-google-drive-picker";

export const UploadComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "657067571471-ep5smabkno63h5mt0p0k9kujk6ikj31a.apps.googleusercontent.com",
      developerKey: "AIzaSyAK86TLOmnTsI3wvBV4kRyE1US3a-mztgA",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        } else {
          setUploadedDocument(data.docs[0]);
        }
        console.log(data);
      },
    });
  };

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
            <button className="upload-btn" onClick={() => handleOpenPicker()}>
              Upload
            </button>
            {uploadedDocument && <p>Uploaded File: {uploadedDocument.name}</p>}
          </div>
          <button className="next-upload">Next</button>
        </div>
      </div>
    )
  );
};
