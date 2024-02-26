import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({
  jobTitle,
  jobType,
  jobSummary,
  department,
  location,
  salary,
  postedTime,
  id,
}) => {
  return (
    <div className="card page-row">
      <div className="card-header">
        <h3 className="card-title">
          <a href="job-single.html">{jobTitle}</a>
          <span
            className={`badge ${
              jobType === "Full Time" ? "badge-success" : "badge-warning"
            } float-end`}
          >
            {jobType}
          </span>
        </h3>
      </div>
      <div className="card-body">{jobSummary}</div>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Department:</strong> {department}
        </li>
        <li className="list-group-item">
          <strong>Location:</strong> {location}
        </li>
        <li className="list-group-item">
          <strong>Salary:</strong> {salary}
        </li>
      </ul>
      <div className="card-footer">
        <div className="row">
          <ul className="list-inline col-md-8 col-sm-6 col-xs-6">
            <li className="p-1">
              <Link to={`/job/${id}`}>More details</Link>
            </li>
          </ul>
          <div className="meta col-md-4 col-sm-6 col-xs-6 text-end">
            <small>Posted {postedTime} ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
