import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const HomeQuickLinks = () => {
  return (
    <section className="links rounded shadow mb-4">
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
        <p>
          <a href="#">
            <FontAwesomeIcon icon={faCaretRight} />
            Job Vacancies
          </a>
        </p>
        <p>
          <a href="#">
            <FontAwesomeIcon icon={faCaretRight} />
            Contact
          </a>
        </p>
      </div>
    </section>
  );
};

export default HomeQuickLinks;
