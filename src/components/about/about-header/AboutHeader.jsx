import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AboutHeader = () => {
  return (
    <header className="page-heading clearfix">
      <h1 className="heading-title">About</h1>
      <div className="breadcrumbs">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-label">You are here:</li>
          <li>
            <a href="index.html">Home</a>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li className="current">About</li>
        </ul>
      </div>
    </header>
  );
};

export default AboutHeader;
