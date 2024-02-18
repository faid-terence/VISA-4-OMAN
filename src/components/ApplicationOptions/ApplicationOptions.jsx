import React from "react";
import "./ApplicationOptions.css";
import icon1 from "../../assets/icon2.svg";
import icon2 from "../../assets/icon3.svg";

export const ApplicationOptions = () => {
  return (
    <main className="application">
      <div className="content-header2">
        <h5>طلب تأشيرة عُمان سهل ومريح!</h5>
      </div>
      <h3>اختر من بين اثنين من الخيارات الخالية من المتاعب</h3>
      <div className="options-container">
        <div className="card-container">
          <div className="card">
            <img src={icon1} alt="" />
            <h3>التقديم باليد</h3>
            <p>
              تفضل بزيارة أحد وكالات السياحة المعتمدة لدينا والمنتشرة ضمن أنحاء
              الجمهورية لتقديم أوراقك
            </p>
            <button className="card-button">ابدأ</button>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <img src={icon2} alt="" />
            <h3>التقديم أونلاين</h3>
            <p>
              قم بإرسال مستنداتك عبر بوابتنا الالكترونية وستصلك الفيزا عن طريق
              الواتساب
            </p>
            <button className="card-button">ابدأ</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplicationOptions;
