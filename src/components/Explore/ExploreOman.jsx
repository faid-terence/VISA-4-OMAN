import React from "react";
import "./Explore.css";
import Oman from "../../assets/Oman.svg";
import PlayIcon from "../../assets/Play.svg";
import slogan from "../../assets/slogan.svg";

function ExplorOman() {
  return (
    <>
      <main className="main-content">
        <div className="content-header">
          <section className="info-section">
            <img
              loading="lazy"
              src={PlayIcon}
              alt="Oman national emblem"
              className="national-emblem"
            />
            <div className="info-wrapper">
              <img
                loading="lazy"
                src={slogan}
                alt="Explore Visa 4 Oman"
                className="explore-image"
              />
              <article className="text-content">
                <h1 className="title-text">استكشف فيزا 4 عُمان!</h1>
                <p className="description-text">
                  شاهد الفيديو لمعرفة معلومات عن تأشيرة عُمان وكيف يتم استخراجها
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ExplorOman;
