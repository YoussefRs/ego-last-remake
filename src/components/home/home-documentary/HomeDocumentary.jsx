import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const HomeDocumentary = () => {
  return (
    <section className="video rounded-lg">
      <h1 className="section-heading text-highlight">
        <span className="line">Documentary</span>
      </h1>
      <div className="carousel-controls">
        <a
          className="prev rounded-pill me-1"
          //   href="#videos-carousel"
          //   data-slide="prev"
          data-bs-target="#videos-carousel"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </a>
        <a
          className="next rounded-pill"
          //   href="#videos-carousel"
          //   data-slide="next"
          data-bs-target="#videos-carousel"
          data-bs-slide="next"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </a>
      </div>
      <div className="section-content">
        <div id="videos-carousel" className="videos-carousel carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item item active">
              <div className="ratio ratio-16x9 mb-2">
                <iframe
                  className="rounded-lg"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cIhh1Yh0V_w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="carousel-item item">
              <div className="ratio ratio-16x9 mb-2">
                <iframe
                  className="embed-responsive-item"
                  src="http://www.youtube.com/embed/RcGyVTAoXEU?rel=0&amp;wmode=transparent"
                  frameBorder="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <div className="carousel-item item">
              <div className="ratio ratio-16x9 mb-2">
                <iframe
                  className="embed-responsive-item"
                  src="http://www.youtube.com/embed/Ks-_Mh1QhMc?rel=0&amp;wmode=transparent"
                  frameBorder="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <p className="description">
          This is a documentary of shyamoli Ideal polytechnic institute
          Chittagong campus. Shyamoli ideal polytechnic institute covers 4 years
          diploma in engineering course under Bangladesh Technical Education
          Board. This documentary has been created by the student of Computer
          Technology 7th semester.
        </p>
      </div>
    </section>
  );
};

export default HomeDocumentary;
