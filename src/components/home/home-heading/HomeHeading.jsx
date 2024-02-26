import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function HomeHeading() {
  return (
    <section className="promo box box-dark rounded">
      <div className="row">
        <div className="col-lg-9 col-12">
          <h1 className="section-heading">Why Ego Education?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            bibendum orci eget nulla mattis, quis viverra tellus porta. Donec
            vitae neque ut velit eleifend commodo. Maecenas turpis odio,
            placerat eu lorem ut, suscipit commodo augue.
          </p>
        </div>
        <div className="col-lg-3 col-12 d-flex align-item-center justify-content-center">
          <a className="_btn btn-cta" href="all-pages/registration.html">
            <FontAwesomeIcon icon={faPlayCircle} />
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
