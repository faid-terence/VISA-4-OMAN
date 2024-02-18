import React from "react";
import icon1 from "../../assets/icon1.svg";
import globalIcon from "../../assets/global.svg";
import userIcon from "../../assets/user.svg";
import messageIcon from "../../assets/message.svg";
import tickIcon from "../../assets/tick.svg";
import calendarIcon from "../../assets/calendar.svg";
import clockIcon from "../../assets/clock.svg";
import "./Description.css";

export const CompanyDescription = () => {
  return (
    <section>
      <div className="decription-container">
        <div className="left-features">
          <div className="left-content">
            <div className="img-container">
              <img src={icon1} alt="" />
            </div>
            <h1 className="headerTitle">انتقال سلس</h1>
            <article className="infoText one">
              نوفر مسارًا خاليًا من المتاعب لاستكشاف <br />
              جمال عُمان ومن ثم الانتقال بسلاسة إلى تأشيرات العمل
            </article>
          </div>
          <div className="left-content">
            <div className="img-container">
              <img src={userIcon} alt="" />
            </div>
            <h1 className="headerTitle">حلول مصممة خصيصاً لك </h1>
            <article className="infoText two">
              سواء كنت تبحث عن مغامرات قصيرة الأمد أو فرص مهنية، فإن خدماتنا
              المتنوعة تلبي احتياجاتك
            </article>
          </div>
          <div className="left-content">
            <div className="img-container">
              <img src={messageIcon} alt="" />
            </div>
            <h1 className="headerTitle">نحن هنا للمساعدة</h1>
            <article className="infoText three">
              يضمن فريقنا المخصص أن نكون لك <br />
              مرشدًا ومساعدًا في كل خطوة.
            </article>
          </div>
        </div>

        <div className="center-feature">
          <img src={globalIcon} alt="" />
        </div>
        <div className="right-feature">
          <div className="right-content">
            <div className="img-container">
              <img src={tickIcon} alt="" />
            </div>
            <h1 className="headerTitle">الخبرة والاعتماد</h1>
            <article className="infoText four">
              وكالتنا معتمدة من قبل سفارة عُمان، مما يضمن لك المصداقية والوثوقية
              العالية. 
            </article>
          </div>
          <div className="right-content">
            <div className="img-container">
              <img src={calendarIcon} alt="" />
            </div>
            <h1 className="headerTitle">فيزا ببساطة!</h1>
            <article className="infoText five">
              قدم أوراقك عن طريق موقعنا الالكتروني أو تفضل بزيارة أحد فروع
              وكلائنا المعتمدين 
            </article>
          </div>
          <div className="right-content">
            <div className="img-container">
              <img src={clockIcon} alt="" />
            </div>
            <h1 className="headerTitle">أنجز بسرعة</h1>
            <article className="infoText six">
              نوفر مسارًا خاليًا من المتاعب لاستكشاف جمال عُمان ومن ثم الانتقال
              بسلاسة إلى تأشيرات العمل
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
