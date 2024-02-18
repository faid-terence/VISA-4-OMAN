import React from "react";
import visaIcon from "../../assets/statistic1.svg";
import usersIcon from "../../assets/statistic2.svg";

function StatisticItem({ icon, count, description }) {
  return (
    <section className="statistic-item">
      <img src={icon} alt="" className="statistic-icon" />
      <div className="statistic-count">{count}</div>
      <div className="statistic-description">{description}</div>
    </section>
  );
}

function StatisticsComponent() {
  const statisticsData = [
    {
      icon: visaIcon,
      count: "5000+",
      description: "تأشيرة تم إصدارها",
    },
    {
      icon: usersIcon ,
      count: "150+",
      description: "مصري استقرّ في عُمان للعمل",
    },
  ];

  return (
    <>
      <main className="statistics-container">
        {statisticsData.map((data, index) => (
          <StatisticItem key={index} {...data} />
        ))}
      </main>
      <style jsx>{`
        .statistics-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #185c82;
          padding: 43px 60px;
        }
        @media (max-width: 991px) {
          .statistics-container {
            padding: 0 20px;
            flex-direction: column;
          }
        }
        .statistic-item {
          display: flex;
          flex-direction: column;
          color: #fefefe;
          text-align: center;
          margin: 0 40px;
        }
        .statistic-icon {
          width: 64px;
          margin: 0 auto;
        }
        .statistic-count {
          margin-top: 16px;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -1.2px;
        }
        .statistic-description {
          font-size: 18px;
          line-height: 156%;
          font-weight: 600;
        }
        @media (max-width: 991px) {
          .statistic-count {
            font-size: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default StatisticsComponent;
