import React, { useState } from "react";
import closeIcon from "../../assets/Close.svg";
import "./Upload.css";
import useDrivePicker from "react-google-drive-picker";

export const UploadComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [uploadedDocuments, setUploadedDocuments] = useState([
    null,
    null,
    null,
  ]);
  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = (index) => {
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
          const updatedDocuments = [...uploadedDocuments];
          updatedDocuments[index] = data.docs[0];
          setUploadedDocuments(updatedDocuments);
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
      <div className="model-container">
        <div className="uploading">
          <div className="headings">
            <p>خطوة 2 من 4</p>
            <h3>نوع الفيزا</h3>
            <button className="close-button" onClick={handleClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          {uploadedDocuments.map((uploadedDocument, index) => (
            <div
              className={`upload ${
                index > 0 && !uploadedDocuments[index - 1] ? "hidden" : ""
              }`}
              key={index}
            >
              <h4>1. قم بتحميل رسالة تأكيد الدفع</h4>
              <button
                className="next-upload"
                onClick={() => handleOpenPicker(index)}
              >
                Next
              </button>
              {index === uploadedDocuments.length - 2 ? null : (
                <p className="warn">
                  من فضلك تأكد من رفع الملفات في احدي الصيغ التالية لتستطيع
                  المتابعة: (pdf , png , jepg)
                </p>
              )}
              {uploadedDocument && (
                <p>Uploaded File: {uploadedDocument.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
};
