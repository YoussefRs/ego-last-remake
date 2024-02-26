import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EnquireWidget = () => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Enquire about this course</h3>
      <p>
        Donec pulvinar arcu lacus, vel aliquam libero scelerisque a. Cras mi
        tellus, vulputate eu eleifend at, consectetur fringilla lacus. Nulla ut
        purus.
      </p>
      <p className="tel">
        <FontAwesomeIcon icon={faPhone} color="#046635" className="me-1" /> Tel: <a>+8801712345678</a>
      </p>
      <p className="email">
        <FontAwesomeIcon icon={faEnvelope} color="#046635" className="me-1" /> Email:{" "}
        <Link>info@ego-education.com</Link>
      </p>
    </section>
  );
};

export default EnquireWidget;
