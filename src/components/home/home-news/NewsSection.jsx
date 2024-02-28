import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the required icons

import news1 from "../../../assets/images/news/news-thumb-1.jpg";
import news2 from "../../../assets/images/news/news-thumb-2.jpg";
import news3 from "../../../assets/images/news/news-thumb-3.jpg";
import news4 from "../../../assets/images/news/news-thumb-4.jpg";
import news5 from "../../../assets/images/news/news-thumb-5.jpg";
import news6 from "../../../assets/images/news/news-thumb-6.jpg";


const NewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <section className="news mb-4">
      <div className="divisions division_4" onmousemove="animate_balls(event)">
        <div className="title_header mb-4">
          <h2 className="title medium">
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
          </h2>
        </div>
        <div className="cards">
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div className="photo">
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg"
                className="image"
              />
              <div className="caption">Informatics</div>
            </div>

            <div className="photo">
              <img
                src="https://media.istockphoto.com/id/1333158315/photo/civil-engineer-jobs-double-exposure-of-project-management-team-and-construction-site-with.jpg?b=1&s=612x612&w=0&k=20&c=vGQC6UQgNxp3bgZ-y3CKB96t1-93GnakM_8U-Rbh8Tw="
                className="image"
              />
              <div className="caption">Civil engineering</div>
            </div>

            <div className="photo">
              <img
                src="https://www.collegevaluesonline.com/wp-content/uploads/2021/03/shutterstock_328883171.jpg"
                className="image"
              />
              <div className="caption">Economics</div>
            </div>

            <div className="photo">
              <img
                src="https://uscenterforsafesport.org/wp-content/uploads/2022/08/FeaturedImage_Home_080922.png"
                className="image"
              />
              <div className="caption">Sports</div>
            </div>
          </div>
          {/* <section className="fixed_flex">
            <figure className="flex_content">
              <img src={info} alt="" loading="lazy" />
            </figure>
            <figure className="flex_content">
              <img src={civil} alt="" loading="lazy" />
            </figure>
            <figure className="flex_content">
              <img src={eco} alt="" loading="lazy" />
            </figure>
            <figure className="flex_content">
              <img src={sports} alt="" loading="lazy" />
            </figure>
          </section> */}
        </div>
      </div>
      {/* <h1 className="section-heading text-highlight fw-bold">
        <span className="line">Latest News</span>
      </h1>
      <div className="carousel-controls">
        <a
          className="prev rounded-pill hov_pointer me-1"
          //   href="#news-carousel"
          //   data-slide="prev"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </a>
        <a
          className="next rounded-pill hov_pointer"
          //   href="#news-carousel"
          //   data-slide="next"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </a>
      </div>
      <div className="section-content clearfix">
        <div id="news-carousel" className="news-carousel carousel slide">
          <div className="carousel-inner">
            <div
              className={`item carousel-item ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <div className="row">
                <div className="col-lg-4 col-12 news-item">
                  <h2 className="title">
                    <a href="news.html">Award Giving Ceremony</a>
                  </h2>
                  <img className="thumb rounded-pill" src={news1} alt="" />
                  <p>
                    Suspendisse purus felis, porttitor quis sollicitudin sit
                    amet, elementum et tortor. Praesent lacinia magna in
                    malesuada vestibulum. Pellentesque urna libero.
                  </p>
                  <a className="read-more" href="news-single.html">
                    Read more <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </div>
                <div className="col-lg-4 col-12 news-item">
                  <h2 className="title">
                    <a href="news.html">RAG Day (Batch 201-19)</a>
                  </h2>
                  <p>
                    Nam feugiat erat vel neque mollis, non vulputate erat
                    aliquet. Maecenas ac leo porttitor, semper risus
                    condimentum, cursus elit. Vivamus vitae libero tellus.
                  </p>
                  <a className="read-more" href="news.html">
                    Read more <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                  <img className="thumb rounded-pill" src={news2} alt="" />
                </div>
                <div className="col-lg-4 col-12 news-item">
                  <h2 className="title">
                    <a href="news.html">Tribute to Principal M.A. Sattar</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam bibendum mauris eget sapien consectetur pellentesque.
                    Proin elementum tristique euismod.
                  </p>
                  <a className="read-more" href="news.html">
                    Read more <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                  <img className="thumb rounded-pill" src={news3} alt="" />
                </div>
              </div>
            </div>
            <div
              className={`item carousel-item ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <div className="row">
                <div className="col-lg-4 col-12 news-item">
                  <h2 className="title">
                    <a href="news.html">Principal M. A. Sattar</a>
                  </h2>
                  <img className="thumb rounded-pill" src={news4} alt="" />
                  <p>
                    Suspendisse purus felis, porttitor quis sollicitudin sit
                    amet, elementum et tortor. Praesent lacinia magna in
                    malesuada vestibulum. Pellentesque urna libero.
                  </p>
                  <a className="read-more" href="news.html">
                    Read more
                    <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </div>
                <div className="col-lg-4 col-12 news-item">
                  <h2 className="title">
                    <a href="news.html">Conference</a>
                  </h2>
                  <p>
                    Nam feugiat erat vel neque mollis, non vulputate erat
                    aliquet. Maecenas ac leo porttitor, semper risus
                    condimentum, cursus elit. Vivamus vitae libero tellus.
                  </p>
                  <a className="read-more" href="news.html">
                    Read more <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                  <img className="thumb rounded-pill" src={news5} alt="" />
                </div>
                <div className="col-lg-4 col-12 news-item">
                  <h2 className="title">
                    <a href="news.html">Student Practical Training</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam bibendum mauris eget sapien consectetur pellentesque.
                    Proin elementum tristique euismod.
                  </p>
                  <a className="read-more" href="news.html">
                    Read more <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                  <img className="thumb rounded-pill" src={news6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default NewsSection;
