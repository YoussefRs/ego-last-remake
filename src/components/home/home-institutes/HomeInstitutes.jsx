import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../../assets/images/testimonials/profile-1.jpg";
import img2 from "../../../assets/images/testimonials/profile-2.jpg";
import img3 from "../../../assets/images/testimonials/profile-3.jpg";
import img4 from "../../../assets/images/testimonials/profile-4.jpg";
import university from "../../../assets/Pegaso-header.jpg";

const HomeInstitutes = () => {
  return (
    <section className="testimonials rounded">
      <h1 className="section-heading text-highlight">
        <span className="line fw-bold">Our Others Parteners</span>
      </h1>
      <div className="carousel-controls">
        <a
          className="prev rounded-pill me-1"
          data-bs-target="#campus-carousel"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </a>
        <a
          className="next rounded-pill"
          data-bs-target="#campus-carousel"
          data-bs-slide="next"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </a>
      </div>
      <div className="section-content">
        <div
          id="campus-carousel"
          className="testimonials-carousel carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item item active">
              <div className="source">
                <p className="people">
                  <span className="name">Università Telematica Pegaso</span>
                  <br />
                  <span className="title">Italy</span>
                </p>
                <img className="img-fluid rounded" src={university} alt="" />
              </div>
              <blockquote className="quote mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  eius iure nam? Necessitatibus facilis libero, soluta unde sunt
                  cupiditate nobis, atque maxime optio exercitationem ipsam
                  voluptates corrupti, cumque beatae temporibus esse nihil
                  sapiente porro minus nemo suscipit! Voluptatum deserunt
                  necessitatibus voluptatem dolor amet quod?
                </p>
              </blockquote>
            </div>
            {/* <div className="carousel-item item">
              <div className="source">
                <p className="people">
                  <span className="name">Università Telematica Pegaso</span>
                </p>
                <img className="img-fluid rounded" src={university} alt="" />
              </div>
              <blockquote className="quote mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  eius iure nam? Necessitatibus facilis libero, soluta unde sunt
                  cupiditate nobis, atque maxime optio exercitationem ipsam
                  voluptates corrupti, cumque beatae temporibus esse nihil
                  sapiente porro minus nemo suscipit! Voluptatum deserunt
                  necessitatibus voluptatem dolor amet quod?
                </p>
              </blockquote>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInstitutes;
