import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DownloadProspectusWidget = () => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Why Ego-Education ?</h3>
      <p>
        Donec pulvinar arcu lacus, vel aliquam libero scelerisque a. Cras mi
        tellus, vulputate eu eleifend at, consectetur fringilla lacus. Nulla ut
        purus.
      </p>
      <Link className="btn btn-info rounded">
        <FontAwesomeIcon icon={faDownload} /> Download now
      </Link>
    </section>
  );
};

export default DownloadProspectusWidget;
