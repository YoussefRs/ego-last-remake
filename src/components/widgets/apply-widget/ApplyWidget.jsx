import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ApplyWidget = () => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Why Ego-Education ?</h3>
      <p>
        Donec pulvinar arcu lacus, vel aliquam libero scelerisque a. Cras mi
        tellus, vulputate eu eleifend at, consectetur fringilla lacus. Nulla ut
        purus.
      </p>
      <Link className="btn apply-btn rounded">
        <FontAwesomeIcon icon={faDownload} /> Apply now
      </Link>
    </section>
  );
};

export default ApplyWidget;
