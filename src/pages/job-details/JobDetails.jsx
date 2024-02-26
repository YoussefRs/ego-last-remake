import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../../components/global/sub-header/SubHeader";
import JobsOtherWidget from "../../components/widgets/jobs-other-widget/JobsOtherWidget";
import useJobs from "../../hooks/useJobs";

const JobDetails = () => {
  const [jobId, setJobId] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
  const getJobById = (jobId) => {
    return jobsData.find((job) => job.id === jobId);
  };
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const parts = path.split("/");
    setJobId(parts[2]);
  }, [location]);
  const jobsData = useJobs({ type: "all" });
  useEffect(() => {
    if (jobId) {
      const foundJob = getJobById(jobId);
      setJobDetails(foundJob);
    }
  }, [jobId]);
  if (!jobDetails) {
    return;
  }

  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={"About"}
          path={[
            { url: "/", label: "Home" },
            { url: "/jobs", label: "Jobs" },
          ]}
          current={jobDetails.jobTitle}
        />
        <div className="page-content">
          <div className="row page-row">
            <div className="jobs-wrapper col-lg-8 col-md-7 col-12">
              <h3 className="title">{jobDetails.title}</h3>
              <div className="box box-border page-row">
                <ul className="list-unstyled">
                  <li>
                    <strong>Job Ref:</strong> {jobDetails.jobRef}
                  </li>
                  <li>
                    <strong>Department:</strong> {jobDetails.department}
                  </li>
                  <li>
                    <strong>Location:</strong> {jobDetails.location}
                  </li>
                  <li>
                    <strong>Salary:</strong> {jobDetails.salary}
                  </li>
                  <li>
                    <strong>Hours:</strong> {jobDetails.hours}h
                  </li>
                  <li>
                    <strong>Closing date:</strong> {jobDetails.closingDate}
                  </li>
                  <li>
                    <strong>Job Application Form:</strong>{" "}
                    <a href="#">Download</a>
                  </li>
                </ul>
              </div>
              <p>{jobDetails.description}</p>
              <ul>
                {jobDetails.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <p className="page-row">{jobDetails.additionalInfo}</p>
              <h4 className="text-highlight">How to apply</h4>
              <p>{jobDetails.howToApply}</p>
            </div>
            <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <JobsOtherWidget
                jobs={useJobs({ type: "random", param: jobDetails.id })}
              />
              <section className="widget has-divider">
                <h3 className="title">Why College Green</h3>
                <p>
                  Maecenas nisl urna, condimentum ac justo a, adipiscing
                  hendrerit magna. Fusce pharetra laoreet accumsan. Phasellus
                  elit sapien, consequat vel sapien sit amet, condimentum
                  vulputate odio. Aliquam fringilla justo quis est placerat, eu
                  imperdiet lorem cursus. Curabitur pretium nulla lorem, sed
                  egestas ante vestibulum dignissim.
                </p>
                <a className="_btn btn-theme" href="jobs.html">
                  Find out more
                </a>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
