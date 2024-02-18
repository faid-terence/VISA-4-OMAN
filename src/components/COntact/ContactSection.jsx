import React from "react";
import './ContactSection.css'

function ContactSection() {
  return (
    <>
      <section className="contact-section">
        <div className="content-wrapper">
          <ContactInfo />
          <CompanyInfo />
        </div>
      </section>
    </>
  );
}

function ContactInfo() {
  return (
    <div className="contact-details">
      <div className="contact-title">تواصل معنا</div>
      <div className="contact-info">
        <div className="contact-text">
          <span>+201070871896</span>
          <br />
          <a
            href="mailto:info@gleemtours.com"
            className="email-link"
            target="_blank"
          >
            info@gleemtours.com
          </a>
          <br />
          مسقط الخوير شارع دوحة الادب
        </div>
        <ContactLogos />
      </div>
    </div>
  );
}

function ContactLogos() {
  return (
    <div className="contact-logos">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42edf9268ebbd858f3206481ae8a7c5b2b5230cdc18b83fc113440c876c1dec?apiKey=adb818a380d442cb937ab642e81f4d54&"
        className="logo"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e74c459734cea6e732398f61701f06c63c9ebdadf7ea9cc4da5c57f40862126?apiKey=adb818a380d442cb937ab642e81f4d54&"
        className="logo"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcf5cceab295bd38a9674c932b35fd327571271353a2ba34a818bac50cba847?apiKey=adb818a380d442cb937ab642e81f4d54&"
        className="logo"
        alt=""
      />
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="company-info">
      <div className="company-description">
        في فيزا4 عمان نتخصص في حصول المصريين علي تأشيرات...
      </div>
      <div className="company-logo-wrapper">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2fb49bcb4d2be8e1f80ec354678d2e59c474d8e3a42bbdca50abce9a3625f06?apiKey=adb818a380d442cb937ab642e81f4d54&"
          className="company-logo"
          alt="Company Logo 1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab0681f48339b7683e40b1cddc4fe239aaa4c69732d29041fdfc0cad35c33ec1?apiKey=adb818a380d442cb937ab642e81f4d54&"
          className="company-logo"
          alt="Company Logo 2"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b80e8a1b45114496abc3aaefe2f59a176208a2037c9c1130e2778a8e7fde793?apiKey=adb818a380d442cb937ab642e81f4d54&"
          className="company-logo"
          alt="Company Logo 3"
        />
      </div>
      <div className="company-partnership">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9f8b06133b26195919750af0258efe8841ff42b6f1d44f431624805b96e646?apiKey=adb818a380d442cb937ab642e81f4d54&"
          className="partnership-logo"
          alt="Partnership Logo"
        />
        <div className="partnership-text">فيزا 4 عُمان هي إحدى شركات</div>
      </div>
    </div>
  );
}

export default ContactSection;
