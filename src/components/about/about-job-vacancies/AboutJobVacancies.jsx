import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const AboutJobVacancies = () => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Job Vacancies</h3>
      <ul className="job-list custom-list-style">
        <li>
          <FontAwesomeIcon icon={faCaretRight} />
          <a href="#">Learning Support Assistant</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCaretRight} />
          <a href="#">Lecturer - EEE</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCaretRight} />
          <a href="#">Lecturer - Computer Science</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCaretRight} />
          <a href="#">Administrative Assistant</a>
        </li>
      </ul>
      <a className="_btn btn-theme rounded" href="jobs.html">
        Find out more
      </a>
    </section>
  );
};

export default AboutJobVacancies;
