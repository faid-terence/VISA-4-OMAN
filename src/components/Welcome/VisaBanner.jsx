import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import "./Welcome.css";
import heroImage from "../../assets/hero.svg";
import Navlink from "../Navlinks/Navlink";

function VisaBanner() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="hero">
      <header>
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <img src={menuIcon} alt="Menu" onClick={toggleNav} />
          </div>
        </div>
      </header>
      {isNavOpen && <Navlink />}
      <section className="Welcome">
        <div className="welcome-wrapper">
          <div className="introduction">
            <p>
              مرحباً بك في فيزا 4 عُمان
              <br />
              بوابتك إلى فرص سلطنة عُمان!
            </p>
          </div>
          <span className="span">
            احصل على فيزا عُمان من المصدر بدون أي وسيط خلال 24 ساعة.{" "}
          </span>
          <button className="welcome-btn">قدّم على التأشيرة الآن</button>
        </div>
      </section>
      <div className="image">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default VisaBanner;
