import React from "react";
import logoFooter from "../../assets/logoFooter.svg";
import youtubeIcon from "../../assets/Youtube.svg";
import motto from "../../assets/motto.svg";
import socialIcons from "../../assets/socialIcons.svg";
import contact from "../../assets/Contact.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="leftContent">
        <img src={contact} alt="" />
      </div>

      <div className="rightContent">
        <img src={logoFooter} alt="" />
        <p>
          في فيزا4 عمان نتخصص في حصول المصريين علي تأشيرات لمدة 10 أيام او 30
          يوم مع إمكانية التجديد لأربع اشهر
        </p>
        <img src={socialIcons} alt="" />
        <div className="motto">
          <img src={motto} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
