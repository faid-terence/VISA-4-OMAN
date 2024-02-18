import React from "react";
import "./Navlink.css";
import navLogo from "../../assets/navLogo.svg";
import arrowIcon from "../../assets/arrow.svg";

export const Navlink = () => {
  return (
    <header className="navlink-header">
      <div className="logo-container">
        <a href="/back" className="back-link">
          رجوع
        </a>
        <img src={arrowIcon} alt="logo" className="logo-image" />
      </div>
      <nav className="navlink-nav">
        <div className="nav-section">
          <a href="/home">الرئيسية</a>
          <a href="/about">من نحن؟</a>
        </div>
        <div className="nav-section">
          <a href="/why">لماذا فيزا 4 عُمان؟</a>
          <a href="/faq">الأسئلة الشائعة</a>
        </div>
      </nav>
      <div className="logo-image">
        <img src={navLogo} alt="" />
      </div>
    </header>
  );
};

export default Navlink;
