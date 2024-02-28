import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomeQuickLinks = () => {
  return (
    <section className="links rounded shadow">
      <h1 className="section-heading text-highlight">
        <span className="line">Quick Links</span>
      </h1>
      <div className="section-content">
        <p>
          <a href="#">
            <FontAwesomeIcon icon={faCaretRight} />
            E-learning Portal
          </a>
        </p>
        <p>
          <a href="#">
            <FontAwesomeIcon icon={faCaretRight} />
            Gallery
          </a>
        </p>
        {/* <p>
          <Link to={"/jobs"}>
            <FontAwesomeIcon icon={faCaretRight} />
            Jobs
          </Link>
        </p> */}
        <p>
          <Link to={"/contact"}>
            <FontAwesomeIcon icon={faCaretRight} />
            Contact
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeQuickLinks;
