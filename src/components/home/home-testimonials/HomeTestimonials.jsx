import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const HomeTestimonials = () => {
  return (
    <section className="testimonials">
      <h1 className="section-heading text-highlight">
        <span className="line"> Testimonials</span>
      </h1>
      <div className="carousel-controls">
        <a
          className="prev rounded-pill me-1"
          data-bs-target="#testimonials-carousel"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </a>
        <a
          className="next rounded-pill"
          data-bs-target="#testimonials-carousel"
          data-bs-slide="next"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </a>
      </div>
      <div className="section-content">
        <div
          id="testimonials-carousel"
          className="testimonials-carousel carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item item active">
              <blockquote className="quote">
                <p>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  I’m very happy interdum eget ipsum. Nunc pulvinar ut nulla
                  eget sollicitudin. In hac habitasse platea dictumst. Integer
                  mattis varius ipsum, posuere posuere est porta vel. Integer
                  metus ligula, blandit ut fermentum a, rhoncus in ligula. Duis
                  luctus.
                </p>
              </blockquote>
              <div className="source">
                <p className="people">
                  <span className="name">Shahin Hossain</span>
                </p>
              </div>
            </div>
            <div className="carousel-item item">
              <blockquote className="quote">
                <p>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  I'm very pleased commodo gravida ultrices. Sed massa leo,
                  aliquet non velit eu, volutpat vulputate odio. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Suspendisse
                  porttitor metus eros, ut fringilla nulla auctor a.
                </p>
              </blockquote>
              <div className="source">
                <p className="people">
                  <span className="name">Harunur Rashid Noyon</span>
                </p>
              </div>
            </div>
            <div className="carousel-item item">
              <blockquote className="quote">
                <p>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  I'm delighted commodo gravida ultrices. Sed massa leo, aliquet
                  non velit eu, volutpat vulputate odio. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Suspendisse porttitor
                  metus eros, ut fringilla nulla auctor a.
                </p>
              </blockquote>
              <div className="source">
                <p className="people">
                  <span className="name">Iqbal Hossain</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
