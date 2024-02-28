import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ApplyWidget = () => {
  return (
    <section className="widget has-divider mb-3">
      <h3 className="title">Why Ego-Education ?</h3>
      <p>
        With the new eGO brand, Ieli intends to initiate this
        internationalization process through highly specialized, innovative and
        professionalizing courses for active employment research.
      </p>
      <div className="d-flex align-items-center justify-content-start">
        <a className="_btn btn-cta" href="/enrollment">
          <FontAwesomeIcon icon={faPlayCircle} />
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default ApplyWidget;
