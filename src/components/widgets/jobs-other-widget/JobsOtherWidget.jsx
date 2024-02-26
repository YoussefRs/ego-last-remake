import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobsOtherWidget = ({ jobs }) => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Other Jobs</h3>
      <ul className="job-list custom-list-style">
        {jobs.map((job, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={faCaretRight} />
            <Link to={`/job/${job.id}`}>{job.jobTitle}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobsOtherWidget;
